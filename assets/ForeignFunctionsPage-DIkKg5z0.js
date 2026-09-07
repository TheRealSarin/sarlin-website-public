import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CN3eci3P.js";import{t as r}from"./Callout-BJIfHOFw.js";import{t as i}from"./Heading-COY0RrEn.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`external Rust func add(left int32, right int32) int32
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
}`;function u(){return(0,o.jsxs)(a,{title:`Foreign functions`,lead:`Embedding C, C++ and Rust function bodies directly in Sarlin source.`,status:`0.1.1`,children:[(0,o.jsx)(r,{variant:`note`,title:`Requires Sarlin 0.1.1`,children:(0,o.jsxs)(`p`,{children:[`Embedded foreign functions were added in 0.1.1. A 0.1.0 compiler rejects`,` `,(0,o.jsx)(t,{children:`external`}),` as unknown syntax.`]})}),(0,o.jsx)(i,{id:`declaring`,children:`Declaring a foreign function`}),(0,o.jsx)(n,{code:s,label:`foreign.sar`}),(0,o.jsxs)(`p`,{children:[`Sarlin owns the declaration and the selected language supplies the body. Write`,` `,(0,o.jsx)(t,{children:`external`}),`, then `,(0,o.jsx)(t,{children:`C`}),`,`,` `,(0,o.jsx)(t,{children:`Cpp`}),` or `,(0,o.jsx)(t,{children:`Rust`}),`, then an ordinary`,` `,(0,o.jsx)(t,{children:`func`}),` declaration. The body begins on the next line and runs until`,` `,(0,o.jsx)(t,{children:`end external`}),` appears on a line of its own. Any other language name reports `,(0,o.jsx)(t,{children:`expected C, Cpp, or Rust`}),`.`]}),(0,o.jsx)(`p`,{children:`Call a foreign function exactly like a Sarlin function. One project may mix C, C++ and Rust functions freely.`}),(0,o.jsx)(n,{code:l,label:`mixed.sar`}),(0,o.jsx)(i,{id:`types`,children:`Types at the boundary`}),(0,o.jsxs)(`p`,{children:[`Parameters and return values may be `,(0,o.jsx)(t,{children:`int32`}),`,`,` `,(0,o.jsx)(t,{children:`int64`}),`, `,(0,o.jsx)(t,{children:`uint32`}),`,`,` `,(0,o.jsx)(t,{children:`uint64`}),`, `,(0,o.jsx)(t,{children:`float32`}),` or`,` `,(0,o.jsx)(t,{children:`float64`}),`. Omit the return type for a function that returns nothing.`]}),(0,o.jsx)(n,{code:c,label:`void.sar`}),(0,o.jsx)(r,{variant:`warning`,title:`Not part of the 0.1.1 boundary`,children:(0,o.jsx)(`p`,{children:`Strings, booleans, arrays, dictionaries, classes, callables and signals cannot cross the foreign function boundary. Neither can external libraries, headers or custom linker options. Only the six numeric types above are supported.`})}),(0,o.jsx)(i,{id:`toolchains`,children:`Toolchains`}),(0,o.jsxs)(`p`,{children:[`Building a C function requires Clang, a C++ function requires`,` `,(0,o.jsx)(t,{children:`clang++`}),`, and a Rust function requires`,` `,(0,o.jsx)(t,{children:`rustc`}),`. Sarlin reports a missing toolchain, and reports errors from the native compiler with the language and the foreign function that produced them. Generated native source and library files are removed after the build, whether it succeeded or failed.`]}),(0,o.jsxs)(`p`,{children:[`A foreign function name may not begin with `,(0,o.jsx)(t,{children:`sarlin_`}),`. That prefix is reserved for the Sarlin runtime and is rejected during checking.`]})]})}export{u as default};