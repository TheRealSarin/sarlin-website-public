import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bvw_hYBp.js";import{t as r}from"./Callout-BwkC29Ah.js";import{t as i}from"./Heading-BPUxoFuA.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`func status(health int32, alive bool) string {
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
}`,l=`func main() {
    for i in 1 to 3 {
        print(i)
    }

    for i in 3 to 1 {
        print("down " + i)
    }

    local var items string[] = ["Bob", "Alice"]
    for i in 0 to items.length - 1 {
        if i == 1 {
            break
        }
        print(items[i])
    }
}`;function u(){return(0,o.jsxs)(a,{title:`Control flow`,lead:`Conditional execution, counting loops and collection iteration.`,children:[(0,o.jsx)(i,{id:`conditionals`,children:`Conditional branches`}),(0,o.jsx)(n,{code:s,label:`conditions.sar`}),(0,o.jsxs)(`p`,{children:[`Conditions must have type `,(0,o.jsx)(t,{children:`bool`}),`. Branches use`,(0,o.jsx)(t,{children:`if`}),`, optional `,(0,o.jsx)(t,{children:`else if`}),` branches, and an optional final `,(0,o.jsx)(t,{children:`else`}),`.`]}),(0,o.jsx)(i,{id:`while`,children:`While loops`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`while`}),` loop repeats while its boolean condition is true. Sarlin evaluates the condition before every iteration.`]}),(0,o.jsx)(i,{id:`for`,children:`For loops`}),(0,o.jsx)(n,{code:c,label:`loops.sar`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`for`}),` loop over a collection iterates an array or dictionary. For arrays, the first name receives the value and an optional second name receives its zero-based position. For dictionaries, the first name receives the value and the optional second name receives the key.`]}),(0,o.jsx)(r,{variant:`warning`,title:`Do not resize during iteration`,children:`Resizing the array or dictionary being iterated is rejected at compile time where the compiler can see it, and stops the program at runtime otherwise, such as when a called function resizes it. Replacing existing elements is allowed.`}),(0,o.jsx)(i,{id:`range-loops`,children:`Range loops`}),(0,o.jsx)(n,{code:l,label:`ranges.sar`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`for i in START to END`}),` counts through a range of integers. START and END can be any integer expressions, and both ends are included, so`,` `,(0,o.jsx)(t,{children:`1 to 10`}),` runs ten times. When START is greater than END the loop counts down, again including both ends. When they are equal the body runs once. The body always runs at least once.`]}),(0,o.jsxs)(`p`,{children:[`START and END are evaluated once, before the loop begins. Changing a variable used in END inside the body does not change how many times the loop runs. The loop variable is read-only, like the variables of an array loop. Its type follows the bounds: two plain literals give `,(0,o.jsx)(t,{children:`int32`}),`, a literal takes the type of the other bound, and otherwise the loop variable has the type of START. `,(0,o.jsx)(t,{children:`break`}),` and`,` `,(0,o.jsx)(t,{children:`continue`}),` work as in other loops.`]}),(0,o.jsxs)(`p`,{children:[`A range loop takes a single loop variable; writing two reports`,` `,(0,o.jsx)(t,{children:`a range loop takes a single loop variable, not a value and a position`}),`. Bounds that are not integers report`,` `,(0,o.jsx)(t,{children:`range loop bounds must be integers, found 'type'`}),`.`,` `,(0,o.jsx)(t,{children:`to`}),` is now a reserved word.`]}),(0,o.jsxs)(r,{variant:`warning`,title:`Do not use a range to walk an empty array`,children:[`A range never runs zero times, and it counts down when START is greater than END. A bound such as `,(0,o.jsx)(t,{children:`-1`}),` in`,` `,(0,o.jsx)(t,{children:`for i in 0 to items.length - 1`}),` therefore means a count from 0 down to -1 when the array is empty. In practice `,(0,o.jsx)(t,{children:`items.length`}),` is unsigned, so on an empty array that subtraction stops the program with`,` `,(0,o.jsx)(t,{children:`integer arithmetic overflowed its type`}),`. Either way the loop does not do nothing. To walk an array, use`,` `,(0,o.jsx)(t,{children:`for value, position in items`}),`, which handles an empty array correctly.`]}),(0,o.jsx)(i,{id:`break-and-continue`,children:`Break and continue`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`break`}),` exits the nearest loop. `,(0,o.jsx)(t,{children:`continue`}),`skips to its next iteration. Both are valid only inside `,(0,o.jsx)(t,{children:`while`}),` or`,(0,o.jsx)(t,{children:`for`}),` loops, including range loops.`]})]})}export{u as default};