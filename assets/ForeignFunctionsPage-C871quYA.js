import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bt71XjRG.js";import{t as r}from"./Callout-Di3xoH1Z.js";import{t as i}from"./Heading-CikHdSQ2.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`external Rust func add(left int32, right int32) int32
    left + right
end external

func main() {
    print(add(20, 22))
}`,c=`external C func observe(value uint64)
    (void)value;
end external

func main() {
    observe(42)
}`,l=`external C func scale(value int32) int32
    return value * 2;
end external

external Cpp func combine(left float64, right float64) float64
    return left + right;
end external

external Rust func offset(value int64) int64
    value + 7
end external

func main() {
    print(scale(21))
    print(combine(1.5, 2.5))
    print(offset(35))
}`,u=`external C "math.h"
external C "stdlib.h"

func main() {
    print(hypot(3.0, 4.0))
    print(atoi("42") + 1)
    print(getenv("HOME") != "")
}`,d=`external C "stdlib.h"

func main() {
    local var result div_t = div(17, 5)
    print(result.quot)
    print(result.rem)
}`,f=`external C "math.h"
external C "stdlib.h"
external C "time.h"

func main() {
    local var exponent int32[] = [0]
    print(frexp(8.0, exponent))
    print(exponent[0])

    local var rest string[] = [""]
    print(strtol("42abc", rest, 10))
    print(rest[0])

    local var moment int64[] = [0]
    local var parts tm = gmtime(moment)
    print(parts.tm_year + 1900)
}`,p=`typedef struct Vector2 { float x, y; } Vector2;
typedef struct KeyEvent { int type; int key; } KeyEvent;
typedef struct MouseEvent { int type; Vector2 position; } MouseEvent;
typedef union Event { int type; KeyEvent key; MouseEvent mouse; } Event;

typedef struct Sprite {
    Vector2 corners[4];
    char name[16];
    float tint[4];
} Sprite;

int poll_event(Event *event);
void draw_sprite(const Sprite *sprite);`,m=`external C "game.h"

func main() {
    local var sprite Sprite = Sprite.new()
    sprite.name = "hero"
    sprite.corners[2].x = 32.0
    sprite.tint[3] = 1.0
    draw_sprite(sprite)

    local var event Event = Event.new()
    while poll_event(event) == 1 {
        if event.type == 1 {
            print("key " + event.key.key)
        } else {
            print("mouse at " + event.mouse.position.x)
        }
    }
}`,h=`external C "stdlib.h"

func goodbye() {
    print("goodbye")
}

func main() {
    atexit(goodbye)
    print("running")
}`,g=`external C "stdio.h"

func main() {
    printf("%s has %d lives and %.1f%% health\\n", "Sarlin", 3, 99.5)
}`,_=`external C "math.h"
external C "stdlib.h"

func main() {
    print(EXIT_FAILURE)
    print(RAND_MAX > 0)
    print(M_PI)
    print(isnan(0.0))
}`,v=`name: My Game
entry: source/main.sar
language: 1
include: native/include
link: raylib
link linux: m pthread dl
link windows: opengl32 gdi32 winmm
link macos: framework Cocoa framework IOKit framework OpenGL`,y=`name: tiny_physics
entry: source/physics.sar
language: 1
include: native/include
native: native/src/*.c
macro: PHYSICS_FLOAT=1
macro windows: PHYSICS_WINDOWS`,b=[{c:`int, short, long, char, int8_t to uint64_t, size_t`,sarlin:`the integer type of the same size and sign; long follows the platform`},{c:`float, double`,sarlin:`float32, float64`},{c:`long double, __int128`,sarlin:`float64, int64; a value that does not fit stops the program`},{c:`bool`,sarlin:`bool`},{c:`const char *`,sarlin:`string; NULL becomes ""`},{c:`char * parameter`,sarlin:`uint8[], a buffer C writes into`},{c:`char[N] field`,sarlin:`string, at most N - 1 bytes`},{c:`struct, union`,sarlin:`a class made with .new; union fields share memory`},{c:`struct or union pointer, opaque pointer`,sarlin:`the class itself; NULL is null`},{c:`number pointer parameter`,sarlin:`an array of that number; an empty array passes NULL`},{c:`T ** and char ** parameters`,sarlin:`an array of the class, or string[]`},{c:`fixed array field`,sarlin:`a sized array, such as float32[4]`},{c:`void * and other pointers`,sarlin:`CPointer`},{c:`enum value, #define`,sarlin:`a constant`},{c:`function pointer`,sarlin:`a callable shape named after its typedef`}];function x(){return(0,o.jsxs)(a,{title:`Foreign functions`,lead:`Calling C libraries straight from Sarlin, and embedding C, C++ and Rust function bodies.`,status:`0.1.7`,children:[(0,o.jsx)(r,{variant:`note`,title:`Requires Sarlin 0.1.7`,children:(0,o.jsxs)(`p`,{children:[`Importing C headers and the `,(0,o.jsx)(t,{children:`include`}),`,`,` `,(0,o.jsx)(t,{children:`link`}),`, `,(0,o.jsx)(t,{children:`native`}),` and`,` `,(0,o.jsx)(t,{children:`macro`}),` project settings were added in 0.1.7. Embedded function bodies have existed since 0.1.1.`]})}),(0,o.jsx)(i,{id:`importing`,children:`Importing a C header`}),(0,o.jsxs)(`p`,{children:[`Write `,(0,o.jsx)(t,{children:`external C`}),` and a header name in quotes at the top level of any file. Sarlin reads the header with clang, and every function, type and constant in it can then be used from ordinary Sarlin code under its C name. No wrapper code is written by hand: the compiler generates the C glue for the names the program uses.`]}),(0,o.jsx)(n,{code:u,label:`import.sar`}),(0,o.jsxs)(`p`,{children:[`Headers are searched for in the project folder, in every `,(0,o.jsx)(t,{children:`include`}),` `,`folder of the project and its packages, and in the system include folders. A header that cannot be found reports`,` `,(0,o.jsx)(t,{children:`C header 'name.h' was not found in the project folder or the system include folders`}),`. A Sarlin declaration with the same name always wins over a C one.`]}),(0,o.jsx)(i,{id:`types`,children:`How C types appear in Sarlin`}),(0,o.jsx)(`p`,{children:`Sarlin itself does not change: every C type is translated into a type Sarlin already has.`}),(0,o.jsx)(`div`,{className:`not-prose border-base-300 my-4 overflow-x-auto rounded-box border`,children:(0,o.jsxs)(`table`,{className:`table-sm table w-full`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{scope:`col`,children:`C`}),(0,o.jsx)(`th`,{scope:`col`,children:`Sarlin`})]})}),(0,o.jsx)(`tbody`,{children:b.map(e=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{scope:`row`,className:`font-mono font-normal`,children:e.c}),(0,o.jsx)(`td`,{children:e.sarlin})]},e.c))})]})}),(0,o.jsx)(`p`,{children:`Text passed to C must not contain a zero byte, and a C value that does not fit its Sarlin type stops the program with a runtime error instead of being cut short.`}),(0,o.jsx)(i,{id:`structs`,children:`Structs and unions`}),(0,o.jsxs)(`p`,{children:[`A C struct becomes a class. Create one with `,(0,o.jsx)(t,{children:`.new`}),`, read and write its fields, and pass it to C functions that take the struct or a pointer to it. Typedef names of the same struct share one class, and a C field whose name is a Sarlin keyword gets a trailing underscore.`]}),(0,o.jsx)(n,{code:d,label:`structs.sar`}),(0,o.jsx)(`p`,{children:`The fields live in C memory, so a struct C hands back by pointer keeps its identity, and writes from Sarlin reach C straight away. A nested struct field is a view into its parent, array fields can be changed element by element, and unions are classes whose fields share memory, so writing one field changes the others as in C.`}),(0,o.jsx)(n,{code:p,language:`text`,label:`game.h`}),(0,o.jsx)(n,{code:m,label:`game.sar`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`.duplicate()`}),` copies the C struct into a new object. Memory that C allocated is never freed by Sarlin; call the library's own free or destroy function, as in C.`]}),(0,o.jsx)(i,{id:`pointers`,children:`Pointers and arrays`}),(0,o.jsxs)(`p`,{children:[`A pointer to a struct is the class itself, and `,(0,o.jsx)(t,{children:`null`}),` passes`,` `,(0,o.jsx)(t,{children:`NULL`}),`. A pointer to numbers is always an array, so a single value C writes back is an array of one element, and an empty array passes`,` `,(0,o.jsx)(t,{children:`NULL`}),`. Make an array as large as the C function expects: C cannot see the length.`]}),(0,o.jsx)(n,{code:f,label:`pointers.sar`}),(0,o.jsx)(i,{id:`callbacks`,children:`Callbacks`}),(0,o.jsx)(`p`,{children:`A C function pointer accepts a Sarlin function with matching parameters. Its callable shape is named after the C typedef when there is one, so a variable can hold it too.`}),(0,o.jsx)(n,{code:h,label:`callbacks.sar`}),(0,o.jsxs)(`p`,{children:[`Up to 16 different Sarlin functions can be given to C for each callback shape at the same time when the callback takes text, structs or pointers. A callback that C calls from another thread must follow the same rules as code started with`,` `,(0,o.jsx)(t,{children:`run`}),`.`]}),(0,o.jsx)(i,{id:`variadic`,children:`Variable arguments and macros`}),(0,o.jsxs)(`p`,{children:[`Functions such as `,(0,o.jsx)(t,{children:`printf`}),` take any number of extra arguments. Numbers, booleans, text and class values can be passed, and literals take the types C would give them.`]}),(0,o.jsx)(n,{code:g,label:`variadic.sar`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`#define`}),` value becomes a constant, including text and struct literals such as colour macros. A function-like macro is called like a function; its result type comes from the arguments of each call.`]}),(0,o.jsx)(n,{code:_,label:`macros.sar`}),(0,o.jsx)(i,{id:`linking`,children:`Linking libraries`}),(0,o.jsxs)(`p`,{children:[`Libraries are named in `,(0,o.jsx)(t,{children:`sarlin.project`}),`, so the source keeps a single import line. `,(0,o.jsx)(t,{children:`include`}),` adds a header folder.`,` `,(0,o.jsx)(t,{children:`link`}),` names system libraries or library files inside the project, and `,(0,o.jsx)(t,{children:`link linux`}),`, `,(0,o.jsx)(t,{children:`link windows`}),` and`,` `,(0,o.jsx)(t,{children:`link macos`}),` apply to one platform. Frameworks are written`,` `,(0,o.jsx)(t,{children:`framework Name`}),` on a `,(0,o.jsx)(t,{children:`link macos`}),` line.`]}),(0,o.jsx)(n,{code:v,language:`text`,label:`sarlin.project`}),(0,o.jsx)(`p`,{children:`These settings in a package carry over to every program that requires it, so a game only adds the package.`}),(0,o.jsx)(i,{id:`native-sources`,children:`Building C sources`}),(0,o.jsxs)(`p`,{children:[`A package can ship a library's C source instead of asking users to install it.`,` `,(0,o.jsx)(t,{children:`native`}),` names the files to compile, with`,` `,(0,o.jsx)(t,{children:`*`}),` allowed in the file name, and `,(0,o.jsx)(t,{children:`macro`}),` `,`defines C preprocessor macros for those files. Both accept a platform like `,(0,o.jsx)(t,{children:`link`}),`.`]}),(0,o.jsx)(n,{code:y,language:`text`,label:`sarlin.project`}),(0,o.jsxs)(`p`,{children:[`Each file is compiled once and cached in `,(0,o.jsx)(t,{children:`~/.sarlin/native`}),` (set`,` `,(0,o.jsx)(t,{children:`SARLIN_NATIVE_CACHE`}),` to move it), and rebuilt when the file, a header it includes, the macros or the compiler change. Prebuilt binaries cannot be listed in the Nook, and every package that imports headers or uses these settings is reviewed by a person before it is published.`]}),(0,o.jsx)(i,{id:`embedding`,children:`Embedding a function body`}),(0,o.jsx)(n,{code:s,label:`foreign.sar`}),(0,o.jsxs)(`p`,{children:[`Sarlin owns the declaration and the selected language supplies the body. Write`,` `,(0,o.jsx)(t,{children:`external`}),`, then `,(0,o.jsx)(t,{children:`C`}),`,`,` `,(0,o.jsx)(t,{children:`Cpp`}),` or `,(0,o.jsx)(t,{children:`Rust`}),`, then an ordinary`,` `,(0,o.jsx)(t,{children:`func`}),` declaration. The body begins on the next line and runs until`,` `,(0,o.jsx)(t,{children:`end external`}),` appears on a line of its own. Any other language name reports `,(0,o.jsx)(t,{children:`expected C, Cpp, or Rust`}),`. C bodies can use every imported header.`]}),(0,o.jsx)(`p`,{children:`Call a foreign function exactly like a Sarlin function. One project may mix C, C++ and Rust functions freely.`}),(0,o.jsx)(n,{code:l,label:`mixed.sar`}),(0,o.jsxs)(`p`,{children:[`Parameters and return values of embedded functions may be `,(0,o.jsx)(t,{children:`int32`}),`,`,` `,(0,o.jsx)(t,{children:`int64`}),`, `,(0,o.jsx)(t,{children:`uint32`}),`,`,` `,(0,o.jsx)(t,{children:`uint64`}),`, `,(0,o.jsx)(t,{children:`float32`}),` or`,` `,(0,o.jsx)(t,{children:`float64`}),`. Omit the return type for a function that returns nothing. Imported headers have no such limit.`]}),(0,o.jsx)(n,{code:c,label:`void.sar`}),(0,o.jsx)(i,{id:`toolchains`,children:`Toolchains`}),(0,o.jsxs)(`p`,{children:[`Importing headers and building C functions requires Clang, a C++ function requires`,` `,(0,o.jsx)(t,{children:`clang++`}),`, and a Rust function requires`,` `,(0,o.jsx)(t,{children:`rustc`}),`. Sarlin reports a missing toolchain, and reports errors from the native compiler with the language and the foreign function that produced them. Generated native source and library files are removed after the build, whether it succeeded or failed.`]}),(0,o.jsxs)(`p`,{children:[`A foreign function name may not begin with `,(0,o.jsx)(t,{children:`sarlin_`}),`. That prefix is reserved for the Sarlin runtime and is rejected during checking.`]})]})}export{x as default};