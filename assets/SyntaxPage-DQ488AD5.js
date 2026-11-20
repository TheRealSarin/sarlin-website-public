import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bt71XjRG.js";import{t as r}from"./Callout-Di3xoH1Z.js";import{t as i}from"./Heading-CikHdSQ2.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`#### File documentation appears before every declaration.

# A normal line comment.

###
A multiline comment starts and ends with three hashes
on lines of their own.
###

## Documentation attached to main.
func main() {
    print("Hello") # Comments may follow code.
}`,c=`func main() {
    local var total int32 = (4 + 2) * 3
    local var ready bool = total >= 10 and not false
    local var message string = "Total: " + total

    print(message)
    print(ready)
}`,l=`func main() {
    print("name\\tscore")
    print("Ada\\t10\\nGrace\\t20")
    print("She said \\"hello\\"")
    print("C:\\\\saves\\\\player.txt")
}`,u=[[`\\n`,`newline (line feed)`],[`\\t`,`tab`],[`\\r`,`carriage return`],[`\\\\`,`one backslash`],[`\\"`,`one double quote`]],d=`func main() {
    local var orange uint32 = 0xFF8800
    local var mask uint8 = 0xff
    print(orange)
    print(mask)
}`,f=`class Player {
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
}`,p=[[`1`,`Member access, calls, indexing`,`value.member, function(), values[index]`],[`2`,`Logical not, numeric negation`,`not, -value`],[`3`,`Multiply, divide, modulo`,`*, /, %`],[`4`,`Add, subtract`,`+, -`],[`5`,`Comparison`,`>, >=, <, <=`],[`6`,`Equality`,`==, !=`],[`7`,`Logical and`,`and`],[`8`,`Logical or`,`or`]];function m(){return(0,o.jsxs)(a,{title:`Syntax and comments`,lead:`The lexical structure of a Sarlin source file.`,children:[(0,o.jsx)(i,{id:`statements-and-blocks`,children:`Statements and blocks`}),(0,o.jsx)(`p`,{children:`Sarlin statements do not end with semicolons. Whitespace separates tokens, while braces delimit function bodies, branches, loops, classes and defines. Parentheses group expressions and contain function arguments.`}),(0,o.jsx)(i,{id:`identifiers`,children:`Identifiers`}),(0,o.jsxs)(`p`,{children:[`An identifier starts with an ASCII letter or underscore and continues with ASCII letters, digits or underscores. Names are case-sensitive. The examples use `,(0,o.jsx)(t,{children:`PascalCase`}),`for classes and defines and `,(0,o.jsx)(t,{children:`snake_case`}),` for values and functions.`]}),(0,o.jsx)(i,{id:`literals`,children:`Literals`}),(0,o.jsxs)(`p`,{children:[`Sarlin has integer literals (decimal or hexadecimal), decimal floating-point literals, the booleans`,(0,o.jsx)(t,{children:`true`}),` and `,(0,o.jsx)(t,{children:`false`}),`, and double-quoted strings. Strings occupy one source line, and a backslash inside one starts an escape sequence. Arrays and dictionaries use bracket literals; they are covered on the Collections page.`]}),(0,o.jsx)(i,{id:`string-escapes`,children:`String escapes`}),(0,o.jsx)(n,{code:l,label:`escapes.sar`}),(0,o.jsx)(`div`,{className:`not-prose border-base-300 my-5 overflow-x-auto rounded-box border`,children:(0,o.jsxs)(`table`,{className:`table-sm table w-full`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{children:`Write`}),(0,o.jsx)(`th`,{children:`To get`})]})}),(0,o.jsx)(`tbody`,{children:u.map(([e,t])=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{scope:`row`,className:`font-mono font-normal whitespace-nowrap`,children:e}),(0,o.jsx)(`td`,{children:t})]},e))})]})}),(0,o.jsxs)(`p`,{children:[`Each escape becomes a single character, so `,(0,o.jsx)(t,{children:`"\\n".length`}),` is 1. Any other character after a backslash is a compile error, such as`,` `,(0,o.jsx)(t,{children:`unknown escape sequence '\\d' in string literal; write '\\\\' for a backslash`}),`. Text without backslashes means exactly what it did before.`]}),(0,o.jsxs)(r,{variant:`warning`,title:`Requires Sarlin 0.1.6`,children:[`Before 0.1.6 a backslash was an ordinary character. Strings that contain one, such as Windows paths written `,(0,o.jsx)(t,{children:`"C:\\saves"`}),`, now need each backslash doubled to `,(0,o.jsx)(t,{children:`"C:\\\\saves"`}),`; otherwise they fail to compile or, for`,` `,(0,o.jsx)(t,{children:`\\n`}),`, `,(0,o.jsx)(t,{children:`\\t`}),` and `,(0,o.jsx)(t,{children:`\\r`}),`, quietly change meaning.`]}),(0,o.jsx)(i,{id:`hex-literals`,children:`Hexadecimal literals`}),(0,o.jsx)(n,{code:d,label:`hex.sar`}),(0,o.jsxs)(`p`,{children:[`An integer literal can be written in hexadecimal with `,(0,o.jsx)(t,{children:`0x`}),` followed by one or more hex digits in either case. The prefix is a lowercase`,` `,(0,o.jsx)(t,{children:`x`}),` only. Hex literals are integers, never floating-point, and are range-checked exactly like decimal ones; the error shows the decimal value, as in`,` `,(0,o.jsx)(t,{children:`integer literal '256' does not fit in 'uint8'. uint8 Range is 0 -> 255`}),`.`,` `,(0,o.jsx)(t,{children:`0x`}),` with no digits reports`,` `,(0,o.jsx)(t,{children:`expected hexadecimal digits after '0x'`}),`. Digit separators such as `,(0,o.jsx)(t,{children:`1_000`}),` are not part of the language.`]}),(0,o.jsxs)(`p`,{children:[`The VSCodium extension (0.2.0) shows a colour picker on six digit`,` `,(0,o.jsx)(t,{children:`0xRRGGBB`}),` and eight digit `,(0,o.jsx)(t,{children:`0xRRGGBBAA`}),` `,`literals.`]}),(0,o.jsx)(i,{id:`comments`,children:`Comments and documentation`}),(0,o.jsx)(n,{code:s,label:`comments.sar`}),(0,o.jsxs)(`ul`,{children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(t,{children:`#`}),` begins a normal comment.`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(t,{children:`##`}),` documents the declaration immediately following it.`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(t,{children:`###`}),` delimits a multiline comment.`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(t,{children:`####`}),` records file documentation and must precede all declarations.`]})]}),(0,o.jsx)(i,{id:`expressions`,children:`Expressions and operators`}),(0,o.jsx)(n,{code:c,label:`expressions.sar`}),(0,o.jsx)(`div`,{className:`not-prose border-base-300 my-5 overflow-x-auto rounded-box border`,children:(0,o.jsxs)(`table`,{className:`table-sm table w-full`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{children:`Precedence`}),(0,o.jsx)(`th`,{children:`Operation`}),(0,o.jsx)(`th`,{children:`Syntax`})]})}),(0,o.jsx)(`tbody`,{children:p.map(([e,t,n])=>(0,o.jsxs)(`tr`,{children:[(0,o.jsxs)(`td`,{children:[e,` (higher first)`]}),(0,o.jsx)(`td`,{children:t}),(0,o.jsx)(`td`,{className:`font-mono`,children:n})]},e))})]})}),(0,o.jsx)(`p`,{children:`Arithmetic requires numeric operands. Comparisons produce booleans. Logical operators require booleans. Addition concatenates strings and automatically converts primitive numeric and boolean operands when a string is required.`}),(0,o.jsx)(i,{id:`negation`,children:`Negation`}),(0,o.jsx)(n,{code:f,label:`negation.sar`}),(0,o.jsxs)(`p`,{children:[`A leading `,(0,o.jsx)(t,{children:`-`}),` negates any numeric expression: a variable, a field, an indexed element, a call or a parenthesised sum. Negation binds tighter than`,` `,(0,o.jsx)(t,{children:`*`}),` and `,(0,o.jsx)(t,{children:`/`}),`, so`,` `,(0,o.jsx)(t,{children:`-a * b`}),` means `,(0,o.jsx)(t,{children:`(-a) * b`}),`. It also combines with binary operators, as in `,(0,o.jsx)(t,{children:`a - -b`}),` and`,` `,(0,o.jsx)(t,{children:`a * -b`}),`.`]}),(0,o.jsxs)(`p`,{children:[`Negating a signed integer is overflow-checked: negating the minimum value of the type stops the program with `,(0,o.jsx)(t,{children:`integer arithmetic overflowed its type`}),`. Unsigned integers wrap. Negating a value that is not a number is a compile error, such as`,` `,(0,o.jsx)(t,{children:`unary '-' requires a numeric operand, found 'bool'`}),`.`]})]})}export{m as default};