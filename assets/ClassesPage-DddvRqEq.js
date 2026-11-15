import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bvw_hYBp.js";import{t as r}from"./Callout-BwkC29Ah.js";import{t as i}from"./Heading-BPUxoFuA.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`class Player {
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
}`,c=`class Counter {
    var count int32 = 0

    func increment() Counter {
        self.count = self.count + 1
        return self
    }

    func is_same(other Counter) bool {
        return other == self
    }
}

func main() {
    local var counter Counter = Counter.new()
    counter.increment().increment()
    print(counter.count)
    print(counter.is_same(counter))
}`,l=`class Node {
    var value int32 = 0
    var next Node = null
}

func find(first Node, target int32) Node {
    local var current Node = first
    while current != null {
        if current.value == target {
            return current
        }
        current = current.next
    }
    return null
}

func main() {
    local var second Node = Node.new(value: 2)
    local var first Node = Node.new(value: 1 next: second)

    if find(first, 3) == null {
        print("not found")
    }
    print(find(first, 2).value)
}`;function u(){return(0,o.jsxs)(a,{title:`Classes`,lead:`Constructible reference types with fields, methods and composed defines.`,children:[(0,o.jsx)(i,{id:`declaration`,children:`Declaring a class`}),(0,o.jsx)(n,{code:s,label:`player.sar`}),(0,o.jsxs)(`p`,{children:[`Class fields use normal `,(0,o.jsx)(t,{children:`var`}),` and `,(0,o.jsx)(t,{children:`const`}),`declarations and always have defaults. Class methods can refer to fields and other methods directly. Constant fields cannot be assigned after construction.`]}),(0,o.jsx)(i,{id:`construction`,children:`Construction`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`ClassName.new()`}),` creates an instance using every field's default. Named constructor arguments override fields. Constructor arguments use`,(0,o.jsx)(t,{children:`field: value`}),`; commas are optional between named arguments.`]}),(0,o.jsx)(i,{id:`identity`,children:`References and identity`}),(0,o.jsx)(`p`,{children:`Class instances are reference values. Assignment and function calls share the same instance. Equality compares object identity: two references to one instance are equal, while two separately constructed instances are not.`}),(0,o.jsx)(i,{id:`self`,children:`Self`}),(0,o.jsx)(n,{code:c,label:`counter.sar`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`self`}),` is a reserved word available inside class functions. It is the object the function belongs to and has the class type, so a method can return it, pass it to another function, store it, compare it with `,(0,o.jsx)(t,{children:`other == self`}),`, read or assign `,(0,o.jsx)(t,{children:`self.field`}),`, and call`,` `,(0,o.jsx)(t,{children:`self.method()`}),`. Plain unqualified field and method access keeps working; `,(0,o.jsx)(t,{children:`self`}),` is only needed when the object itself is the value.`]}),(0,o.jsxs)(`p`,{children:[`Using it elsewhere is an error: `,(0,o.jsx)(t,{children:`'self' can only be used inside a class function`}),`outside a class, and `,(0,o.jsx)(t,{children:`'self' cannot be assigned to`}),` when written on the left of an assignment. `,(0,o.jsx)(t,{children:`self`}),` is not available in define functions in this version; there it reports`,` `,(0,o.jsx)(t,{children:`'self' cannot be used in a define function because a define is not a value type`}),`.`]}),(0,o.jsx)(i,{id:`null`,children:`Null`}),(0,o.jsx)(n,{code:l,label:`linked_list.sar`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`null`}),` is a reserved word meaning no object. Any value of a class type can be null: locals, globals, fields, parameters, return values, array elements and dictionary values. A field can have its own class as its type, as`,` `,(0,o.jsx)(t,{children:`next`}),` does above, which is how linked structures are written. Compare with `,(0,o.jsx)(t,{children:`x == null`}),` and `,(0,o.jsx)(t,{children:`x != null`}),`. An array of objects prints its null elements as `,(0,o.jsx)(t,{children:`null`}),`.`]}),(0,o.jsxs)(`p`,{children:[`Using a null object stops the program. The runtime errors are`,` `,(0,o.jsx)(t,{children:`runtime error: cannot read field 'NAME' of null`}),`,`,` `,(0,o.jsx)(t,{children:`runtime error: cannot assign field 'NAME' of null`}),` and`,` `,(0,o.jsx)(t,{children:`runtime error: cannot call method 'NAME' on null`}),`.`]}),(0,o.jsxs)(`p`,{children:[`Null is only for class types. Numbers, `,(0,o.jsx)(t,{children:`bool`}),`,`,` `,(0,o.jsx)(t,{children:`string`}),`, arrays, dictionaries and callables reject it with`,` `,(0,o.jsx)(t,{children:`'null' can only be used with class types, found 'int32'`}),`. A bare `,(0,o.jsx)(t,{children:`null`}),` with no class to give it a type, as in`,` `,(0,o.jsx)(t,{children:`print(null)`}),`, reports`,` `,(0,o.jsx)(t,{children:`'null' requires a class type context`}),`.`]}),(0,o.jsx)(i,{id:`visibility`,children:`Project-wide visibility`}),(0,o.jsxs)(r,{variant:`note`,title:`No imports required`,children:[`Every class is public throughout its project. A class declared in any`,(0,o.jsx)(t,{children:`.sar`}),` file below `,(0,o.jsx)(t,{children:`source/`}),` is available to all other source files in that project.`]})]})}export{u as default};