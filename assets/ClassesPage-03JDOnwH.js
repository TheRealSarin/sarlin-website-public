import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CN3eci3P.js";import{t as r}from"./Callout-BJIfHOFw.js";import{t as i}from"./Heading-COY0RrEn.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`class Player {
    var name string = "Unknown"
    var score int64 = 0

    func award(points int64) {
        score = score + points
    }

    func description() string {
        return name + ": " + score
    }
}

func main() {
    local var player Player = Player.new(name: "Bob" score: 100)
    player.award(25)
    print(player.description())
}`;function c(){return(0,o.jsxs)(a,{title:`Classes`,lead:`Constructible reference types with fields, methods and composed defines.`,children:[(0,o.jsx)(i,{id:`declaration`,children:`Declaring a class`}),(0,o.jsx)(n,{code:s,label:`player.sar`}),(0,o.jsxs)(`p`,{children:[`Class fields use normal `,(0,o.jsx)(t,{children:`var`}),` and `,(0,o.jsx)(t,{children:`const`}),`declarations and always have defaults. Class methods can refer to fields and other methods directly. Constant fields cannot be assigned after construction.`]}),(0,o.jsx)(i,{id:`construction`,children:`Construction`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`ClassName.new()`}),` creates an instance using every field's default. Named constructor arguments override fields. Constructor arguments use`,(0,o.jsx)(t,{children:`field: value`}),`; commas are optional between named arguments.`]}),(0,o.jsx)(i,{id:`identity`,children:`References and identity`}),(0,o.jsx)(`p`,{children:`Class instances are reference values. Assignment and function calls share the same instance. Equality compares object identity: two references to one instance are equal, while two separately constructed instances are not.`}),(0,o.jsx)(i,{id:`visibility`,children:`Project-wide visibility`}),(0,o.jsxs)(r,{variant:`note`,title:`No imports required`,children:[`Every class is public throughout its project. A class declared in any`,(0,o.jsx)(t,{children:`.sar`}),` file below `,(0,o.jsx)(t,{children:`source/`}),` is available to all other source files in that project.`]})]})}export{c as default};