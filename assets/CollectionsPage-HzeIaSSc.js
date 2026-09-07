import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Aw7PQ-f6.js";import{t as r}from"./Callout-veiOzC_Z.js";import{t as i}from"./Heading-C3xc0MPO.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`func main() {
    local var scores int32[] = [10, 20, 30]
    local var fixed int32[3] = [1, 2, 3]
    local var nested int32[][] = [[1, 2], [3]]

    scores[0] = 15
    print(scores[-1])
    print(nested[0][1])
}`,c=`func main() {
    local var scores dictionary[string, int32] = [
        "Bob": 100
        "Alice": 80
    ]
    local var fixed dictionary[string, int32, 2] = ["A": 1 "B": 2]

    scores["Bob"] = 120
    scores["Danny"] = 70

    for score, name in scores {
        print(name + ": " + score)
    }
}`;function l(){return(0,o.jsxs)(a,{title:`Collections`,lead:`Typed dynamic, fixed and nested arrays and dictionaries.`,children:[(0,o.jsx)(i,{id:`arrays`,children:`Arrays`}),(0,o.jsx)(n,{code:s,label:`arrays.sar`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`Value[]`}),` declares a dynamic array and`,(0,o.jsx)(t,{children:`Value[amount]`}),` declares an array with a fixed length. Add another pair of brackets for each nesting level. An array literal requires a declared array type; all its values must match the element type.`]}),(0,o.jsxs)(`p`,{children:[`Array indexes may use any integer type. Zero addresses the first element. Negative indexes count backwards, so `,(0,o.jsx)(t,{children:`-1`}),` addresses the last element. An invalid index stops the program with a runtime error; fixed literal indexes are also checked at compile time.`]}),(0,o.jsx)(i,{id:`dictionaries`,children:`Dictionaries`}),(0,o.jsx)(n,{code:c,label:`dictionaries.sar`}),(0,o.jsxs)(`p`,{children:[`A dictionary type is written `,(0,o.jsx)(t,{children:`dictionary[Key, Value]`}),`. A third type argument fixes its entry count. Keys may be strings, booleans, or any integer type. Duplicate literal keys are rejected.`]}),(0,o.jsxs)(`p`,{children:[`Assigning to a missing key adds it to a dynamic dictionary. Reading a missing key with indexing stops the program; use `,(0,o.jsx)(t,{children:`get(key, fallback)`}),` when absence is expected. Fixed dictionaries cannot add or remove keys.`]}),(0,o.jsx)(i,{id:`iteration`,children:`Iteration and mutation`}),(0,o.jsx)(`p`,{children:`Array loops provide each value and, optionally, its index. Dictionary loops provide each value and, optionally, its key. Existing values may be replaced during iteration, but the collection cannot be resized until iteration ends.`}),(0,o.jsx)(i,{id:`equality-and-copying`,children:`Equality and copying`}),(0,o.jsxs)(`p`,{children:[`Arrays compare element by element. Dictionaries compare keys and their corresponding values regardless of insertion order. Assignment shares a collection; use`,(0,o.jsx)(t,{children:`duplicate()`}),` or `,(0,o.jsx)(t,{children:`duplicate_deep()`}),` for an explicit copy.`]}),(0,o.jsx)(r,{variant:`note`,children:`Collection properties and methods are listed under Built-in functions. Copy semantics are detailed under Values and copying.`})]})}export{l as default};