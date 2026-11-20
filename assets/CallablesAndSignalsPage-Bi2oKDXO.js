import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bt71XjRG.js";import{t as r}from"./Callout-Di3xoH1Z.js";import{t as i}from"./Heading-CikHdSQ2.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`callable whats_the_name = name_change

func name_change(name string) string {
    return "Mr. " + name
}

func main() {
    local var name string = "Bobby"
    print(whats_the_name(name))

    local callable greet = name_change
    print(greet("Alice"))
}`,c=`callable Action(value int32) int32

func double(value int32) int32 {
    return value * 2
}

func triple(amount int32) int32 {
    return amount * 3
}

class Button {
    var on_press Action = double
}

func apply(action Action, value int32) int32 {
    return action(value)
}

func main() {
    local var steps Action[] = [double, triple]
    local var handlers dictionary[string, Action] = ["a": double]
    local var button Button = Button.new(on_press: triple)

    print(apply(double, 4))
    print(steps[1](2))
    print(handlers["a"](1))
    print(button.on_press(3))
}`,l=`signal name_changed(name string)

func report_name(name string) {
    print(name)
}

func main() {
    local callable listener = report_name

    name_changed.connect(listener)
    emit name_changed("Bobby")

    name_changed.disconnect(listener)
    emit name_changed("Nobody")
}`,u=`signal changed(value int64)

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
}`;function d(){return(0,o.jsxs)(a,{title:`Callables and signals`,lead:`Binding a name to a function, and broadcasting to any number of listeners.`,status:`0.1.1`,children:[(0,o.jsx)(r,{variant:`note`,title:`Requires Sarlin 0.1.1`,children:(0,o.jsxs)(`p`,{children:[`Callables and signals were added in 0.1.1. A 0.1.0 compiler rejects`,` `,(0,o.jsx)(t,{children:`callable`}),`, `,(0,o.jsx)(t,{children:`signal`}),` and`,` `,(0,o.jsx)(t,{children:`emit`}),` as unknown syntax.`]})}),(0,o.jsx)(i,{id:`callables`,children:`Callables`}),(0,o.jsx)(n,{code:s,label:`callables.sar`}),(0,o.jsxs)(`p`,{children:[`A callable binds a name to a function that is already declared.`,` `,(0,o.jsx)(t,{children:`callable name = function_name`}),` takes no parameter list and no type annotation: the callable carries the signature of the function it names. Calling it uses ordinary call syntax, so a callable is interchangeable with the function at every call site.`]}),(0,o.jsxs)(`p`,{children:[`Declare a callable at the top level of a file, or inside a function with`,` `,(0,o.jsx)(t,{children:`local callable`}),`. The target must be a declared function. Naming a function that does not exist reports`,` `,(0,o.jsx)(t,{children:`function 'name' was not found`}),`, and reusing a name that a global or another function already holds reports`,` `,(0,o.jsx)(t,{children:`name 'name' is already declared`}),`.`]}),(0,o.jsx)(i,{id:`shapes`,children:`Callable shapes`}),(0,o.jsx)(n,{code:c,label:`shapes.sar`}),(0,o.jsx)(r,{variant:`note`,title:`Requires Sarlin 0.1.2`,children:`Callable shapes were added in 0.1.2.`}),(0,o.jsxs)(`p`,{children:[`A callable shape names a function signature as a type. Declare one at the top level with`,` `,(0,o.jsx)(t,{children:`callable Name(parameters) ReturnType`}),`; the return type is optional. The `,(0,o.jsx)(t,{children:`callable name = function`}),` and`,` `,(0,o.jsx)(t,{children:`local callable name = function`}),` forms above are unchanged.`]}),(0,o.jsx)(`p`,{children:`A shape can be used as a type for parameters, return values, locals, globals, class and define fields, arrays and dictionary values. It cannot be a dictionary key. A value of a shape is a function, an existing callable binding, or another value of the same shape. Its parameter types and return type must match exactly; parameter names are ignored.`}),(0,o.jsxs)(`p`,{children:[`Call a shape value like any function: `,(0,o.jsx)(t,{children:`action(value)`}),`,`,` `,(0,o.jsx)(t,{children:`button.on_press(3)`}),`, `,(0,o.jsx)(t,{children:`steps[0](2)`}),`,`,` `,(0,o.jsx)(t,{children:`handlers["a"](1)`}),` or `,(0,o.jsx)(t,{children:`make()(2)`}),`. A shape value can also be passed to `,(0,o.jsx)(t,{children:`connect`}),` and`,` `,(0,o.jsx)(t,{children:`disconnect`}),` on a signal whose parameter list matches.`]}),(0,o.jsx)(`p`,{children:`Mistakes are reported at compile time:`}),(0,o.jsxs)(`ul`,{children:[(0,o.jsx)(`li`,{children:(0,o.jsx)(t,{children:`'shout' does not match callable 'Action': expected (int32) int32, found (string) string`})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(t,{children:`type 'Action' is already declared`})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(t,{children:`callables cannot be compared with '==' or '!='`})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(t,{children:`a callable cannot be printed directly; call it with '(...)'`})})]}),(0,o.jsx)(`p`,{children:`Anonymous functions, closures, object methods as callables and null callables are not available.`}),(0,o.jsx)(i,{id:`signals`,children:`Signals`}),(0,o.jsx)(n,{code:l,label:`signals.sar`}),(0,o.jsxs)(`p`,{children:[`A signal declares a typed broadcast. `,(0,o.jsx)(t,{children:`signal name(parameters)`}),` takes a parameter list written exactly like a function's, and declares no body. Signals are declared at the top level of a file only; a signal cannot be declared inside a function.`]}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`connect`}),` adds a listener, `,(0,o.jsx)(t,{children:`disconnect`}),` `,`removes one, and `,(0,o.jsx)(t,{children:`emit name(arguments)`}),` calls every connected listener with those arguments. A listener is a function or a callable whose parameters match the signal. Emitting a signal that was never declared reports`,` `,(0,o.jsx)(t,{children:`signal 'name' was not found`}),`.`]}),(0,o.jsx)(i,{id:`connection-rules`,children:`Connection rules`}),(0,o.jsx)(n,{code:u,label:`order.sar`}),(0,o.jsxs)(`p`,{children:[`Listeners are called in the order they were connected, so this program prints`,` `,(0,o.jsx)(t,{children:`first 1`}),` and then `,(0,o.jsx)(t,{children:`second 1`}),`.`]}),(0,o.jsxs)(`p`,{children:[`Connecting the same listener twice does nothing the second time. A signal holds each listener once, so the third `,(0,o.jsx)(t,{children:`connect`}),` above is ignored and`,` `,(0,o.jsx)(t,{children:`first`}),` still runs once per emit. Disconnecting a listener that is not connected does nothing.`]}),(0,o.jsx)(`p`,{children:`Emitting a signal with no listeners is valid and does nothing. Connecting and disconnecting during a program run are both allowed at any point after the signal is declared.`})]})}export{d as default};