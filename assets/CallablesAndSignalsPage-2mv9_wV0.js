import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CN3eci3P.js";import{t as r}from"./Callout-BJIfHOFw.js";import{t as i}from"./Heading-COY0RrEn.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`callable whats_the_name = name_change

func name_change(name string) string {
    return "Mr. " + name
}

func main() {
    local var name string = "Bobby"
    print(whats_the_name(name))

    local callable greet = name_change
    print(greet("Alice"))
}`,c=`signal name_changed(name string)

func report_name(name string) {
    print(name)
}

func main() {
    local callable listener = report_name

    name_changed.connect(listener)
    emit name_changed("Bobby")

    name_changed.disconnect(listener)
    emit name_changed("Nobody")
}`,l=`signal changed(value int64)

func first(value int64) {
    print("first " + value)
}

func second(value int64) {
    print("second " + value)
}

func main() {
    changed.connect(first)
    changed.connect(second)
    changed.connect(first)

    emit changed(1)
}`;function u(){return(0,o.jsxs)(a,{title:`Callables and signals`,lead:`Binding a name to a function, and broadcasting to any number of listeners.`,status:`0.1.1`,children:[(0,o.jsx)(r,{variant:`note`,title:`Requires Sarlin 0.1.1`,children:(0,o.jsxs)(`p`,{children:[`Callables and signals were added in 0.1.1. A 0.1.0 compiler rejects`,` `,(0,o.jsx)(t,{children:`callable`}),`, `,(0,o.jsx)(t,{children:`signal`}),` and`,` `,(0,o.jsx)(t,{children:`emit`}),` as unknown syntax.`]})}),(0,o.jsx)(i,{id:`callables`,children:`Callables`}),(0,o.jsx)(n,{code:s,label:`callables.sar`}),(0,o.jsxs)(`p`,{children:[`A callable binds a name to a function that is already declared.`,` `,(0,o.jsx)(t,{children:`callable name = function_name`}),` takes no parameter list and no type annotation: the callable carries the signature of the function it names. Calling it uses ordinary call syntax, so a callable is interchangeable with the function at every call site.`]}),(0,o.jsxs)(`p`,{children:[`Declare a callable at the top level of a file, or inside a function with`,` `,(0,o.jsx)(t,{children:`local callable`}),`. The target must be a declared function. Naming a function that does not exist reports`,` `,(0,o.jsx)(t,{children:`function 'name' was not found`}),`, and reusing a name that a global or another function already holds reports`,` `,(0,o.jsx)(t,{children:`name 'name' is already declared`}),`.`]}),(0,o.jsx)(i,{id:`signals`,children:`Signals`}),(0,o.jsx)(n,{code:c,label:`signals.sar`}),(0,o.jsxs)(`p`,{children:[`A signal declares a typed broadcast. `,(0,o.jsx)(t,{children:`signal name(parameters)`}),` takes a parameter list written exactly like a function's, and declares no body. Signals are declared at the top level of a file only; a signal cannot be declared inside a function.`]}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`connect`}),` adds a listener, `,(0,o.jsx)(t,{children:`disconnect`}),` `,`removes one, and `,(0,o.jsx)(t,{children:`emit name(arguments)`}),` calls every connected listener with those arguments. A listener is a function or a callable whose parameters match the signal. Emitting a signal that was never declared reports`,` `,(0,o.jsx)(t,{children:`signal 'name' was not found`}),`.`]}),(0,o.jsx)(i,{id:`connection-rules`,children:`Connection rules`}),(0,o.jsx)(n,{code:l,label:`order.sar`}),(0,o.jsxs)(`p`,{children:[`Listeners are called in the order they were connected, so this program prints`,` `,(0,o.jsx)(t,{children:`first 1`}),` and then `,(0,o.jsx)(t,{children:`second 1`}),`.`]}),(0,o.jsxs)(`p`,{children:[`Connecting the same listener twice does nothing the second time. A signal holds each listener once, so the third `,(0,o.jsx)(t,{children:`connect`}),` above is ignored and`,` `,(0,o.jsx)(t,{children:`first`}),` still runs once per emit. Disconnecting a listener that is not connected does nothing.`]}),(0,o.jsx)(`p`,{children:`Emitting a signal with no listeners is valid and does nothing. Connecting and disconnecting during a program run are both allowed at any point after the signal is declared.`})]})}export{u as default};