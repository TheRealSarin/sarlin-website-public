import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-BMF2FeHC.js";import{t as r}from"./Callout-ButRsY_0.js";import{t as i}from"./Heading-CMgyO_2Q.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`func status(health int32, alive bool) string {
    if alive and health > 50 {
        return "ready"
    } else if alive and health > 0 {
        return "hurt"
    } else {
        return "stopped"
    }
}`,c=`func main() {
    local var count int32 = 0

    while count < 5 {
        count = count + 1
        if count == 2 {
            continue
        }
        print(count)
    }

    local var names string[] = ["Bob", "Alice"]
    for name, position in names {
        print(position + ": " + name)
    }
}`;function l(){return(0,o.jsxs)(a,{title:`Control flow`,lead:`Conditional execution and collection iteration.`,children:[(0,o.jsx)(i,{id:`conditionals`,children:`Conditional branches`}),(0,o.jsx)(n,{code:s,label:`conditions.sar`}),(0,o.jsxs)(`p`,{children:[`Conditions must have type `,(0,o.jsx)(t,{children:`bool`}),`. Branches use`,(0,o.jsx)(t,{children:`if`}),`, optional `,(0,o.jsx)(t,{children:`else if`}),` branches, and an optional final `,(0,o.jsx)(t,{children:`else`}),`.`]}),(0,o.jsx)(i,{id:`while`,children:`While loops`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`while`}),` loop repeats while its boolean condition is true. Sarlin evaluates the condition before every iteration.`]}),(0,o.jsx)(i,{id:`for`,children:`For loops`}),(0,o.jsx)(n,{code:c,label:`loops.sar`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`for`}),` loop iterates an array or dictionary. For arrays, the first name receives the value and an optional second name receives its zero-based position. For dictionaries, the first name receives the value and the optional second name receives the key.`]}),(0,o.jsx)(r,{variant:`warning`,title:`Do not resize during iteration`,children:`Resizing the array or dictionary being iterated is rejected at compile time where the compiler can see it, and stops the program at runtime otherwise, such as when a called function resizes it. Replacing existing elements is allowed.`}),(0,o.jsx)(i,{id:`break-and-continue`,children:`Break and continue`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`break`}),` exits the nearest loop. `,(0,o.jsx)(t,{children:`continue`}),`skips to its next iteration. Both are valid only inside `,(0,o.jsx)(t,{children:`while`}),` or`,(0,o.jsx)(t,{children:`for`}),` loops.`]})]})}export{l as default};