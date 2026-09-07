import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CN3eci3P.js";import{t as r}from"./Callout-BJIfHOFw.js";import{t as i}from"./Heading-COY0RrEn.js";import{b as a}from"./index-CePL8yyU.js";import{t as o}from"./DocPage-BaNKuphE.js";var s=e(),c=`var difficulty int32 = 2
const multiplier int32 = 100

func main() {
    local var score int32 = difficulty * multiplier
    local const player_name string = "Bob"

    score = score + 50
    print(player_name + ": " + score)
}`,l=`var starting_score int32 = initial_score()
const doubled_score int64 = starting_score * 2
var heading string = "Starting score: " + doubled_score
var bonus_available bool = doubled_score > 40

func initial_score() int32 {
    return 21
}

func main() {
    print(heading)
    print(bonus_available)
}`;function u(){return(0,s.jsxs)(o,{title:`Variables and constants`,lead:`Typed names with explicit initial values.`,children:[(0,s.jsx)(i,{id:`declarations`,children:`Declarations`}),(0,s.jsx)(`p`,{children:`Every declaration specifies whether the name is mutable, its type, and an initializer. Sarlin does not declare uninitialised values.`}),(0,s.jsx)(n,{code:c,label:`declarations.sar`}),(0,s.jsxs)(`ul`,{children:[(0,s.jsxs)(`li`,{children:[(0,s.jsx)(t,{children:`var`}),` declares a mutable name.`]}),(0,s.jsxs)(`li`,{children:[(0,s.jsx)(t,{children:`const`}),` declares a name that cannot be reassigned.`]}),(0,s.jsxs)(`li`,{children:[`Inside a function, declarations begin with `,(0,s.jsx)(t,{children:`local`}),`.`]}),(0,s.jsxs)(`li`,{children:[`Outside a function, omit `,(0,s.jsx)(t,{children:`local`}),` to declare a global.`]})]}),(0,s.jsx)(i,{id:`scope`,children:`Scope and names`}),(0,s.jsx)(`p`,{children:`Locals belong to their enclosing function or block. Parameters are local names. Globals are available to functions throughout the program, including functions declared earlier in the source.`}),(0,s.jsx)(r,{variant:`warning`,title:`No shadowing`,children:`A local cannot reuse the name of another visible local, parameter or global. Duplicate global and function names are also rejected.`}),(0,s.jsx)(i,{id:`global-initialization`,children:`Global initialization`}),(0,s.jsxs)(`p`,{children:[`Global initializers run in declaration order before the first statement in`,(0,s.jsx)(t,{children:`main`}),`. Initializers may call functions and use expressions, collections, constructors, and globals already initialized above them. A global initializer cannot refer directly to a later global.`]}),(0,s.jsx)(n,{code:l,label:`global_expressions.sar`}),(0,s.jsx)(n,{code:`Starting score: 42
true`,language:`text`,label:`Output`}),(0,s.jsx)(r,{variant:`note`,title:`Literal globals`,children:`Literal scalar and string globals are emitted directly into the executable. Expression-based globals are evaluated once when the program starts.`}),(0,s.jsx)(i,{id:`constants`,children:`Constants and managed values`}),(0,s.jsxs)(`p`,{children:[`A constant collection cannot be changed through its constant name. Managed values are references, however, so another mutable reference to the same value can still change it. See `,(0,s.jsx)(a,{to:`/docs/language/values-and-copying`,children:`Values and copying`}),`.`]})]})}export{u as default};