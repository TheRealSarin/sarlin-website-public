import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bvw_hYBp.js";import{t as r}from"./Heading-BPUxoFuA.js";import{t as i}from"./DocPage-BaNKuphE.js";var a=e(),o=`#### File documentation appears before every declaration.

# A normal line comment.

###
A multiline comment starts and ends with three hashes
on lines of their own.
###

## Documentation attached to main.
func main() {
    print("Hello") # Comments may follow code.
}`,s=`func main() {
    local var total int32 = (4 + 2) * 3
    local var ready bool = total >= 10 and not false
    local var message string = "Total: " + total

    print(message)
    print(ready)
}`,c=`func main() {
    local var orange uint32 = 0xFF8800
    local var mask uint8 = 0xff
    print(orange)
    print(mask)
}`,l=`class Player {
    var speed int32 = 4
}

func main() {
    local var player Player = Player.new()
    local var a int32 = 3
    local var b int32 = 5
    local var values int32[] = [7, 8]

    print(-player.speed)
    print(-(a + b))
    print(-values[0])
    print(a - -b)
    print(-a * b)
}`,u=[[`1`,`Member access, calls, indexing`,`value.member, function(), values[index]`],[`2`,`Logical not, numeric negation`,`not, -value`],[`3`,`Multiply, divide, modulo`,`*, /, %`],[`4`,`Add, subtract`,`+, -`],[`5`,`Comparison`,`>, >=, <, <=`],[`6`,`Equality`,`==, !=`],[`7`,`Logical and`,`and`],[`8`,`Logical or`,`or`]];function d(){return(0,a.jsxs)(i,{title:`Syntax and comments`,lead:`The lexical structure of a Sarlin source file.`,children:[(0,a.jsx)(r,{id:`statements-and-blocks`,children:`Statements and blocks`}),(0,a.jsx)(`p`,{children:`Sarlin statements do not end with semicolons. Whitespace separates tokens, while braces delimit function bodies, branches, loops, classes and defines. Parentheses group expressions and contain function arguments.`}),(0,a.jsx)(r,{id:`identifiers`,children:`Identifiers`}),(0,a.jsxs)(`p`,{children:[`An identifier starts with an ASCII letter or underscore and continues with ASCII letters, digits or underscores. Names are case-sensitive. The examples use `,(0,a.jsx)(t,{children:`PascalCase`}),`for classes and defines and `,(0,a.jsx)(t,{children:`snake_case`}),` for values and functions.`]}),(0,a.jsx)(r,{id:`literals`,children:`Literals`}),(0,a.jsxs)(`p`,{children:[`Sarlin has integer literals (decimal or hexadecimal), decimal floating-point literals, the booleans`,(0,a.jsx)(t,{children:`true`}),` and `,(0,a.jsx)(t,{children:`false`}),`, and double-quoted strings. Strings occupy one source line and currently have no escape syntax. Arrays and dictionaries use bracket literals; they are covered on the Collections page.`]}),(0,a.jsx)(r,{id:`hex-literals`,children:`Hexadecimal literals`}),(0,a.jsx)(n,{code:c,label:`hex.sar`}),(0,a.jsxs)(`p`,{children:[`An integer literal can be written in hexadecimal with `,(0,a.jsx)(t,{children:`0x`}),` followed by one or more hex digits in either case. The prefix is a lowercase`,` `,(0,a.jsx)(t,{children:`x`}),` only. Hex literals are integers, never floating-point, and are range-checked exactly like decimal ones; the error shows the decimal value, as in`,` `,(0,a.jsx)(t,{children:`integer literal '256' does not fit in 'uint8'. uint8 Range is 0 -> 255`}),`.`,` `,(0,a.jsx)(t,{children:`0x`}),` with no digits reports`,` `,(0,a.jsx)(t,{children:`expected hexadecimal digits after '0x'`}),`. Digit separators such as `,(0,a.jsx)(t,{children:`1_000`}),` are not part of the language.`]}),(0,a.jsxs)(`p`,{children:[`The VSCodium extension (0.2.0) shows a colour picker on six digit`,` `,(0,a.jsx)(t,{children:`0xRRGGBB`}),` and eight digit `,(0,a.jsx)(t,{children:`0xRRGGBBAA`}),` `,`literals.`]}),(0,a.jsx)(r,{id:`comments`,children:`Comments and documentation`}),(0,a.jsx)(n,{code:o,label:`comments.sar`}),(0,a.jsxs)(`ul`,{children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(t,{children:`#`}),` begins a normal comment.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(t,{children:`##`}),` documents the declaration immediately following it.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(t,{children:`###`}),` delimits a multiline comment.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(t,{children:`####`}),` records file documentation and must precede all declarations.`]})]}),(0,a.jsx)(r,{id:`expressions`,children:`Expressions and operators`}),(0,a.jsx)(n,{code:s,label:`expressions.sar`}),(0,a.jsx)(`div`,{className:`not-prose border-base-300 my-5 overflow-x-auto rounded-box border`,children:(0,a.jsxs)(`table`,{className:`table-sm table w-full`,children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{children:`Precedence`}),(0,a.jsx)(`th`,{children:`Operation`}),(0,a.jsx)(`th`,{children:`Syntax`})]})}),(0,a.jsx)(`tbody`,{children:u.map(([e,t,n])=>(0,a.jsxs)(`tr`,{children:[(0,a.jsxs)(`td`,{children:[e,` (higher first)`]}),(0,a.jsx)(`td`,{children:t}),(0,a.jsx)(`td`,{className:`font-mono`,children:n})]},e))})]})}),(0,a.jsx)(`p`,{children:`Arithmetic requires numeric operands. Comparisons produce booleans. Logical operators require booleans. Addition concatenates strings and automatically converts primitive numeric and boolean operands when a string is required.`}),(0,a.jsx)(r,{id:`negation`,children:`Negation`}),(0,a.jsx)(n,{code:l,label:`negation.sar`}),(0,a.jsxs)(`p`,{children:[`A leading `,(0,a.jsx)(t,{children:`-`}),` negates any numeric expression: a variable, a field, an indexed element, a call or a parenthesised sum. Negation binds tighter than`,` `,(0,a.jsx)(t,{children:`*`}),` and `,(0,a.jsx)(t,{children:`/`}),`, so`,` `,(0,a.jsx)(t,{children:`-a * b`}),` means `,(0,a.jsx)(t,{children:`(-a) * b`}),`. It also combines with binary operators, as in `,(0,a.jsx)(t,{children:`a - -b`}),` and`,` `,(0,a.jsx)(t,{children:`a * -b`}),`.`]}),(0,a.jsxs)(`p`,{children:[`Negating a signed integer is overflow-checked: negating the minimum value of the type stops the program with `,(0,a.jsx)(t,{children:`integer arithmetic overflowed its type`}),`. Unsigned integers wrap. Negating a value that is not a number is a compile error, such as`,` `,(0,a.jsx)(t,{children:`unary '-' requires a numeric operand, found 'bool'`}),`.`]})]})}export{d as default};