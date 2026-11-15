import { ConsoleStdout, File, OpenFile, PreopenDirectory, WASI } from './vendor/wasi/index.js'

const OUTPUT_LIMIT_CHARACTERS = 200000
const FLUSH_INTERVAL_MILLISECONDS = 50
const RUNTIME_OBJECTS = ['runtime.o', 'network_stubs.o']

let toolchain = null

class OutputLimitReached extends Error {}

function post(type, fields) {
  self.postMessage({ type, ...fields })
}

function reportDownload() {
  let lastPercent = -1
  return (event) => {
    if (!event.totalLength) {
      return
    }
    const percent = Math.floor((event.doneLength / event.totalLength) * 100)
    if (percent === lastPercent) {
      return
    }
    lastPercent = percent
    const megabytes = Math.round(event.totalLength / 1048576)
    post('status', { text: `Downloading the code generator (${megabytes} MB, first run only): ${percent}%` })
  }
}

async function fetchBytes(path) {
  const response = await fetch(path)
  if (!response.ok) {
    throw new Error(`could not load ${path} (${response.status})`)
  }
  return new Uint8Array(await response.arrayBuffer())
}

async function runClang(clang, args, files) {
  let diagnostics = ''
  const decoder = new TextDecoder()
  const collect = (bytes) => {
    if (bytes) {
      diagnostics += decoder.decode(bytes, { stream: true })
    }
  }
  try {
    return await clang(args, files, {
      stdout: collect,
      stderr: collect,
      decodeASCII: false,
    })
  } catch (error) {
    throw new Error(diagnostics.trim() || error.message)
  }
}

async function loadToolchain() {
  post('status', { text: 'Loading the code generator...' })
  const [{ runClang: clang, runLLVM }, runtime, stubs] = await Promise.all([
    import('./vendor/clang/bundle.js'),
    ...RUNTIME_OBJECTS.map((name) => fetchBytes(`./runtime/${name}`)),
  ])
  await runLLVM(null, {}, { fetchProgress: reportDownload() })
  return { clang, runtime, stubs }
}

async function build(llvm) {
  if (!toolchain) {
    toolchain = await loadToolchain()
  }
  post('status', { text: 'Compiling...' })
  const result = await runClang(
    toolchain.clang,
    ['clang', '-O1', '-Wno-override-module', 'program.ll', 'runtime.o', 'network_stubs.o', '-lm', '-o', 'program.wasm'],
    { 'program.ll': llvm, 'runtime.o': toolchain.runtime, 'network_stubs.o': toolchain.stubs },
  )
  return result['program.wasm']
}

function createOutput() {
  const pending = { stdout: '', stderr: '' }
  let total = 0
  let lastFlush = performance.now()

  const flush = () => {
    for (const stream of ['stdout', 'stderr']) {
      if (pending[stream]) {
        post(stream, { text: pending[stream] })
        pending[stream] = ''
      }
    }
    lastFlush = performance.now()
  }

  const writer = (stream) => (line) => {
    total += line.length + 1
    if (total > OUTPUT_LIMIT_CHARACTERS) {
      throw new OutputLimitReached()
    }
    pending[stream] += `${line}\n`
    if (performance.now() - lastFlush >= FLUSH_INTERVAL_MILLISECONDS) {
      flush()
    }
  }

  return { flush, stdout: writer('stdout'), stderr: writer('stderr') }
}

async function execute(binary) {
  const out = createOutput()
  const wasi = new WASI(['program'], [], [
    new OpenFile(new File([])),
    ConsoleStdout.lineBuffered(out.stdout),
    ConsoleStdout.lineBuffered(out.stderr),
    new PreopenDirectory('/', new Map()),
  ])
  const module = await WebAssembly.compile(binary)
  const instance = await WebAssembly.instantiate(module, { wasi_snapshot_preview1: wasi.wasiImport })
  post('status', { text: 'Running...' })
  const started = performance.now()
  let code = 0
  try {
    code = wasi.start(instance)
  } catch (error) {
    code = 1
    out.flush()
    if (error instanceof OutputLimitReached) {
      post('stderr', { text: '\nThe program printed too much output and was stopped.\n' })
    } else {
      post('stderr', { text: `\nThe program crashed: ${error.message}\n` })
    }
  }
  out.flush()
  post('done', { code, milliseconds: performance.now() - started })
}

self.addEventListener('message', async (event) => {
  if (event.data.type !== 'run') {
    return
  }
  try {
    await execute(await build(event.data.llvm))
  } catch (error) {
    post('error', { text: error.message })
  }
})
