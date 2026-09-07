import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Aw7PQ-f6.js";import{t as r}from"./Callout-veiOzC_Z.js";import{t as i}from"./Heading-C3xc0MPO.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`func add(left int32, right int32) int32 {
    return left + right
}

func show_total(value int32) {
    print("Total: " + value)
}

func main() {
    local var total int32 = add(10, 20)
    show_total(total)
}`;function c(){return(0,o.jsxs)(a,{title:`Functions`,lead:`Typed reusable behaviour and program entry points.`,children:[(0,o.jsx)(i,{id:`declaration`,children:`Declaring and calling functions`}),(0,o.jsx)(n,{code:s,label:`functions.sar`}),(0,o.jsxs)(`p`,{children:[`A function begins with `,(0,o.jsx)(t,{children:`func`}),`, followed by its name and parameter list. Every parameter has a name followed by a type. Parameters are separated by commas. Put the return type after the closing parenthesis, or omit it for a function that returns no value.`]}),(0,o.jsx)(`p`,{children:`Calls use positional arguments and must provide exactly the declared number. Numeric values are converted to the parameter type automatically. Managed arguments share their value with the function rather than copying it.`}),(0,o.jsx)(i,{id:`returns`,children:`Return values`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`return expression`}),` immediately leaves a value-returning function. Every possible path through such a function must return a value of its declared type. Functions without a return type do not use a return statement.`]}),(0,o.jsx)(i,{id:`main`,children:`The main function`}),(0,o.jsxs)(`p`,{children:[`A native executable requires exactly `,(0,o.jsx)(t,{children:`func main()`}),`, with no parameters and no return type. Execution begins there.`]}),(0,o.jsx)(r,{variant:`note`,title:`Methods`,children:`Functions declared inside a class or define are methods. They can directly access that owner's fields, methods and composed defines. Call them through a value with dot syntax.`})]})}export{c as default};