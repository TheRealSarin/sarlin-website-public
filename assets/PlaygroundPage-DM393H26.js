import{i as e,n as t,t as n}from"./jsx-runtime-Cltr0gcK.js";import{t as r}from"./Callout-DTcdyPGu.js";import{y as i}from"./index-Cfg-DM97.js";import{t as a}from"./Container-CVaZQQi7.js";import{t as o}from"./PageHeader-Dc_lH9xH.js";import{t as s}from"./StatusBadge-D_UFByw_.js";import{t as c}from"./highlightSarlin-C4RTnKLk.js";var l=i(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),u=i(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),d=e(t(),1),f=[{id:`hello`,label:`Hello and ranges`,source:`func greet(name string) string {
    return "Hello, " + name
}

func main() {
    print(greet("world"))

    for i in 1 to 5 {
        print("Line " + i)
    }
}
`},{id:`classes`,label:`Classes, null and self`,source:`define Health {
    var current int32 = 100

    func damage(amount int32) {
        current = current - amount
        if current < 0 {
            current = 0
        }
    }
}

class Player [Health] {
    var name string = "Unnamed"
    var next Player = null

    func hit(amount int32) Player {
        health.damage(amount)
        return self
    }
}

func main() {
    local var ada Player = Player.new(name: "Ada")
    local var bob Player = Player.new(name: "Bob")
    ada.next = bob

    ada.hit(30).hit(25)
    print(ada.name + " has " + ada.health.current + " health")

    local var current Player = ada
    while current != null {
        print("In the chain: " + current.name)
        current = current.next
    }
}
`},{id:`callables`,label:`Callables and hex`,source:`callable Step(value int32) int32

func double(value int32) int32 {
    return value * 2
}

func negate(value int32) int32 {
    return -value
}

func apply_all(steps Step[], start int32) int32 {
    local var result int32 = start
    for step in steps {
        result = step(result)
    }
    return result
}

func main() {
    local var steps Step[] = [double, double, negate]
    print(apply_all(steps, 5))

    local var colour uint32 = 0xFF8800
    print(colour)
}
`},{id:`collections`,label:`Collections and JSON`,source:`func main() {
    local var scores dictionary[string, int32] = [
        "Ada": 10
        "Grace": 20
    ]
    scores["Linus"] = 15

    local var total int32 = 0
    for score, name in scores {
        print(name + ": " + score)
        total = total + score
    }
    print("Total: " + total)

    local var encoded string = JSON.stringify(scores)
    print(encoded)

    local var numbers int32[] = [3, 1, 2]
    numbers.add(4)
    print(numbers)
}
`}],p=n(),m=`    `,h=`font-mono text-[0.8125rem] leading-6 sm:text-sm sm:leading-6`;function g({value:e,onChange:t,onRun:n,fieldRef:r}){let i=(0,d.useRef)(null),a=(0,d.useRef)(null),o=(0,d.useMemo)(()=>c(e),[e]),s=(0,d.useMemo)(()=>{let t=e.split(`
`).length;return Array.from({length:t},(e,t)=>t+1).join(`
`)},[e]);return(0,p.jsxs)(`div`,{className:`border-base-300 bg-base-200/60 rounded-box flex h-full overflow-hidden border`,children:[(0,p.jsx)(`pre`,{ref:a,"aria-hidden":`true`,className:`border-base-300 text-base-content/40 w-12 shrink-0 overflow-hidden border-r py-3 pr-2 text-right select-none ${h}`,children:s}),(0,p.jsxs)(`div`,{className:`relative min-w-0 flex-1`,children:[(0,p.jsx)(`pre`,{ref:i,"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 m-0 overflow-hidden p-3 whitespace-pre ${h}`,children:(0,p.jsxs)(`code`,{children:[o.map((e,t)=>(0,p.jsx)(`span`,{className:`tok-${e.kind}`,children:e.value},t)),`
`]})}),(0,p.jsx)(`textarea`,{ref:r,value:e,onChange:e=>t(e.target.value),onScroll:e=>{let t=e.currentTarget;i.current&&(i.current.scrollTop=t.scrollTop,i.current.scrollLeft=t.scrollLeft),a.current&&(a.current.scrollTop=t.scrollTop)},onKeyDown:e=>{if(e.key===`Enter`&&(e.ctrlKey||e.metaKey)){e.preventDefault(),n();return}if(e.key!==`Tab`||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)return;e.preventDefault();let r=e.currentTarget;r.setRangeText(m,r.selectionStart,r.selectionEnd,`end`),t(r.value)},spellCheck:!1,autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,wrap:`off`,"aria-label":`Sarlin source code`,className:`caret-base-content absolute inset-0 size-full resize-none overflow-auto bg-transparent p-3 whitespace-pre text-transparent outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${h}`})]})]})}var _=`/playground/sarlin_playground.wasm`,v=`/playground/worker.js`,y=new TextEncoder,b=new TextDecoder;function x(e){return{ok:!1,diagnostics:[{line:1,column:1,endLine:1,endColumn:1,message:e}]}}function S(e,t){try{let n=y.encode(t),r=e.sarlin_alloc(n.length);new Uint8Array(e.memory.buffer,r,n.length).set(n);let i=e.sarlin_compile(r,n.length);e.sarlin_free(r,n.length);let a=new DataView(e.memory.buffer).getUint32(i,!0),o=b.decode(new Uint8Array(e.memory.buffer,i+4,a));return e.sarlin_free(i,a+4),JSON.parse(o)}catch(e){return x(`the compiler stopped unexpectedly: ${e instanceof Error?e.message:`unknown error`}`)}}async function C(){let e=await fetch(_);if(!e.ok)throw Error(`could not load the Sarlin compiler (${e.status})`);let{instance:t}=await WebAssembly.instantiate(await e.arrayBuffer(),{});return t.exports}function w(e,t,n){let r=e[e.length-1];return r&&r.stream===t?[...e.slice(0,-1),{stream:t,text:r.text+n}]:[...e,{stream:t,text:n}]}function T(){let e=(0,d.useRef)(null),t=(0,d.useRef)(null),[n,r]=(0,d.useState)(!1),[i,a]=(0,d.useState)(!1),[o,s]=(0,d.useState)(`Loading the Sarlin compiler...`),[c,l]=(0,d.useState)([]),[u,f]=(0,d.useState)([]),p=(0,d.useCallback)(()=>{let e=new Worker(v,{type:`module`});e.addEventListener(`message`,e=>{let t=e.data;if(t.type===`status`)s(t.text);else if(t.type===`stdout`||t.type===`stderr`)l(e=>w(e,t.type,t.text));else if(t.type===`done`){let e=(t.milliseconds/1e3).toFixed(2);s(t.code===0?`Finished in ${e} s.`:`Stopped with exit code ${t.code} after ${e} s.`),a(!1)}else l(e=>w(e,`stderr`,`${t.text}\n`)),s(`The program could not be run.`),a(!1)}),e.addEventListener(`error`,e=>{let t=e.message||`the playground worker failed to start`;l(e=>w(e,`stderr`,`${t}\n`)),s(`The program could not be run.`),a(!1)}),t.current=e},[]);return(0,d.useEffect)(()=>{let n=!1;return p(),C().then(t=>{n||(e.current=t,r(!0),s(`Ready. Press Run, or Ctrl+Enter.`))}).catch(e=>{n||s(e instanceof Error?e.message:`could not load the Sarlin compiler`)}),()=>{n=!0,t.current?.terminate(),t.current=null}},[p]),{ready:n,running:i,status:o,output:c,diagnostics:u,check:(0,d.useCallback)(t=>{e.current&&f(S(e.current,t).diagnostics)},[]),run:(0,d.useCallback)(n=>{if(!e.current||!t.current||i)return;let r=S(e.current,n);if(f(r.diagnostics),l([]),!r.ok||r.llvm===void 0){s(`Fix the problems listed under the code, then run again.`);return}a(!0),s(`Starting...`),t.current.postMessage({type:`run`,llvm:r.llvm})},[i]),stop:(0,d.useCallback)(()=>{i&&(t.current?.terminate(),p(),l(e=>w(e,`stderr`,`
Stopped.
`)),s(`Stopped. The next run reloads the code generator.`),a(!1))},[i,p])}}var E=200;function D(e,t,n){let r=e.split(`
`),i=0;for(let e=0;e<Math.min(t-1,r.length);e+=1)i+=r[e].length+1;return i+Math.max(n-1,0)}function O(){let[e,t]=(0,d.useState)(f[0].id),[n,i]=(0,d.useState)(f[0].source),c=(0,d.useRef)(null),m=(0,d.useRef)(null),{ready:h,running:_,status:v,output:y,diagnostics:b,check:x,run:S,stop:C}=T();(0,d.useEffect)(()=>{if(!h)return;let e=setTimeout(()=>x(n),E);return()=>clearTimeout(e)},[h,n,x]),(0,d.useEffect)(()=>{let e=m.current;e&&(e.scrollTop=e.scrollHeight)},[y]);let w=(0,d.useCallback)(()=>S(n),[S,n]),O=e=>{let n=f.find(t=>t.id===e);n&&(t(e),i(n.source))},k=e=>{let t=D(n,e.line,e.column),r=Math.max(D(n,e.endLine,e.endColumn),t);c.current?.focus(),c.current?.setSelectionRange(t,r)};return(0,p.jsxs)(a,{width:`wide`,className:`py-14`,children:[(0,p.jsx)(o,{eyebrow:(0,p.jsx)(s,{tone:`warning`,children:`Experimental`}),title:`Try Sarlin in your browser`,lead:`Write Sarlin, see compiler errors as you type, and run the program without installing anything.`}),(0,p.jsxs)(`div`,{className:`mt-8 flex flex-wrap items-center justify-between gap-3`,children:[(0,p.jsxs)(`label`,{className:`flex items-center gap-2 text-sm`,children:[(0,p.jsx)(`span`,{className:`text-base-content/70`,children:`Example`}),(0,p.jsx)(`select`,{className:`select select-sm`,value:e,onChange:e=>O(e.target.value),children:f.map(e=>(0,p.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsxs)(`button`,{type:`button`,className:`btn btn-primary btn-sm`,onClick:w,disabled:!h||_,children:[(0,p.jsx)(l,{className:`size-4`,"aria-hidden":`true`}),`Run`]}),(0,p.jsxs)(`button`,{type:`button`,className:`btn btn-sm`,onClick:C,disabled:!_,children:[(0,p.jsx)(u,{className:`size-4`,"aria-hidden":`true`}),`Stop`]})]})]}),(0,p.jsxs)(`div`,{className:`mt-4 grid gap-4 lg:grid-cols-5`,children:[(0,p.jsxs)(`section`,{"aria-labelledby":`playground-code`,className:`lg:col-span-3`,children:[(0,p.jsx)(`h2`,{id:`playground-code`,className:`text-base-content/60 mb-2 font-mono text-xs tracking-wide uppercase`,children:`Code`}),(0,p.jsx)(`div`,{className:`h-[28rem]`,children:(0,p.jsx)(g,{value:n,onChange:i,onRun:w,fieldRef:c})}),(0,p.jsx)(`ul`,{className:`mt-3 max-h-40 space-y-1 overflow-auto text-sm`,"aria-live":`polite`,children:b.length===0?(0,p.jsx)(`li`,{className:`text-base-content/60`,children:h?`No problems found.`:``}):b.map((e,t)=>(0,p.jsx)(`li`,{children:(0,p.jsxs)(`button`,{type:`button`,onClick:()=>k(e),className:`bg-error/10 text-error hover:bg-error/20 w-full rounded px-3 py-1.5 text-left font-mono text-xs sm:text-[0.8125rem]`,children:[e.line,`:`,e.column,` `,e.message]})},t))})]}),(0,p.jsxs)(`section`,{"aria-labelledby":`playground-output`,className:`lg:col-span-2`,children:[(0,p.jsx)(`h2`,{id:`playground-output`,className:`text-base-content/60 mb-2 font-mono text-xs tracking-wide uppercase`,children:`Output`}),(0,p.jsx)(`pre`,{ref:m,"aria-live":`polite`,tabIndex:0,className:`border-base-300 bg-base-200/60 rounded-box h-[28rem] overflow-auto border p-3 font-mono text-[0.8125rem] leading-6 break-words whitespace-pre-wrap sm:text-sm sm:leading-6`,children:y.map((e,t)=>(0,p.jsx)(`span`,{className:e.stream===`stderr`?`text-error`:void 0,children:e.text},t))}),(0,p.jsx)(`p`,{className:`text-base-content/60 mt-3 min-h-5 text-sm`,role:`status`,children:v})]})]}),(0,p.jsx)(`div`,{className:`mt-8`,children:(0,p.jsx)(r,{variant:`note`,title:`How the playground works`,children:(0,p.jsx)(`p`,{children:`Everything runs in this browser tab: nothing you type is sent to a server. The first run downloads the code generator, which is about 105 MB, and later runs reuse it. Networking, files on your computer and external C, C++ or Rust functions are not available here; files a program writes exist only for that run.`})})})]})}export{O as default};