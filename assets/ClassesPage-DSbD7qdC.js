import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CfUYbvDv.js";import{t as r}from"./Callout-DGneS21x.js";import{t as i}from"./Heading-CtLDK4Z6.js";import{b as a}from"./index-Cwm0VSKK.js";import{t as o}from"./DocPage-BaNKuphE.js";var s=e(),c=`class Player {
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
}`,l=`class Counter {
    var count int32 = 0

    func increment() {
        self.count = self.count + 1
    }

    func is_same(other Counter) bool {
        return other == self
    }

    func snapshot() Counter {
        return self.duplicate()
    }
}

func main() {
    local var counter Counter = Counter.new()
    counter.increment()
    counter.increment()
    print(counter.count)
    print(counter.is_same(counter))
    print(counter.is_same(counter.snapshot()))
}`,u=`class Node {
    var value int32 = 0
    var next Node = null
}

func contains(node Node, target int32) bool {
    if node == null {
        return false
    }
    if node.value == target {
        return true
    }
    return contains(node.next, target)
}

func main() {
    local var second Node = Node.new(value: 2)
    local var first Node = Node.new(value: 1 next: second)

    if not contains(first, 3) {
        print("not found")
    }
    print(first.next.value)
}`;function d(){return(0,s.jsxs)(o,{title:`Classes`,lead:`Constructible reference types with fields, methods and composed defines.`,children:[(0,s.jsx)(i,{id:`declaration`,children:`Declaring a class`}),(0,s.jsx)(n,{code:c,label:`player.sar`}),(0,s.jsxs)(`p`,{children:[`Class fields use normal `,(0,s.jsx)(t,{children:`var`}),` and `,(0,s.jsx)(t,{children:`const`}),`declarations and always have defaults. Class methods can refer to fields and other methods directly. Constant fields cannot be assigned after construction.`]}),(0,s.jsx)(i,{id:`construction`,children:`Construction`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(t,{children:`ClassName.new()`}),` creates an instance using every field's default. Named constructor arguments override fields. Constructor arguments use`,(0,s.jsx)(t,{children:`field: value`}),`; commas are optional between named arguments.`]}),(0,s.jsx)(i,{id:`identity`,children:`References and identity`}),(0,s.jsxs)(`p`,{children:[`A class instance has a single owner. Assignment moves it, a plain parameter borrows it and a`,` `,(0,s.jsx)(t,{children:`take`}),` parameter moves it into the function; see`,` `,(0,s.jsx)(a,{to:`/docs/language/values-and-copying`,children:`Values and copying`}),`.`,` `,(0,s.jsx)(t,{children:`instance.duplicate()`}),` returns an independent copy, including every nested object and collection. Equality compares object identity: an instance is equal to itself, while two separately constructed instances are not.`]}),(0,s.jsx)(i,{id:`self`,children:`Self`}),(0,s.jsx)(n,{code:l,label:`counter.sar`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(t,{children:`self`}),` is a reserved word available inside class functions. It is the object the function belongs to and has the class type, so a method can pass it to another function, compare it with `,(0,s.jsx)(t,{children:`other == self`}),`, read or assign`,` `,(0,s.jsx)(t,{children:`self.field`}),`, call `,(0,s.jsx)(t,{children:`self.method()`}),` and copy it with `,(0,s.jsx)(t,{children:`self.duplicate()`}),`. The object is owned by whoever called the method, so returning or storing `,(0,s.jsx)(t,{children:`self`}),` itself reports`,` `,(0,s.jsx)(t,{children:`cannot move 'self'; use 'self.duplicate()' to make a copy`}),`. Plain unqualified field and method access keeps working; `,(0,s.jsx)(t,{children:`self`}),` is only needed when the object itself is the value.`]}),(0,s.jsxs)(`p`,{children:[`Using it elsewhere is an error: `,(0,s.jsx)(t,{children:`'self' can only be used inside a class function`}),`outside a class, and `,(0,s.jsx)(t,{children:`'self' cannot be assigned to`}),` when written on the left of an assignment. `,(0,s.jsx)(t,{children:`self`}),` is not available in define functions in this version; there it reports`,` `,(0,s.jsx)(t,{children:`'self' cannot be used in a define function because a define is not a value type`}),`.`]}),(0,s.jsx)(i,{id:`null`,children:`Null`}),(0,s.jsx)(n,{code:u,label:`linked_list.sar`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(t,{children:`null`}),` is a reserved word meaning no object. Any value of a class type can be null: locals, globals, fields, parameters, return values, array elements and dictionary values. A field can have its own class as its type, as`,` `,(0,s.jsx)(t,{children:`next`}),` does above, which is how linked structures are written. Each node owns the next one, so walk such a structure with a function that borrows each node in turn, as `,(0,s.jsx)(t,{children:`contains`}),` does. Compare with `,(0,s.jsx)(t,{children:`x == null`}),` and `,(0,s.jsx)(t,{children:`x != null`}),`. An array of objects prints its null elements as `,(0,s.jsx)(t,{children:`null`}),`.`]}),(0,s.jsxs)(`p`,{children:[`Using a null object stops the program. The runtime errors are`,` `,(0,s.jsx)(t,{children:`runtime error: cannot read field 'NAME' of null`}),`,`,` `,(0,s.jsx)(t,{children:`runtime error: cannot assign field 'NAME' of null`}),` and`,` `,(0,s.jsx)(t,{children:`runtime error: cannot call method 'NAME' on null`}),`.`]}),(0,s.jsxs)(`p`,{children:[`Null is only for class types. Numbers, `,(0,s.jsx)(t,{children:`bool`}),`,`,` `,(0,s.jsx)(t,{children:`string`}),`, arrays, dictionaries and callables reject it with`,` `,(0,s.jsx)(t,{children:`'null' can only be used with class types, found 'int32'`}),`. A bare `,(0,s.jsx)(t,{children:`null`}),` with no class to give it a type, as in`,` `,(0,s.jsx)(t,{children:`print(null)`}),`, reports`,` `,(0,s.jsx)(t,{children:`'null' requires a class type context`}),`.`]}),(0,s.jsx)(i,{id:`visibility`,children:`Project-wide visibility`}),(0,s.jsxs)(r,{variant:`note`,title:`No imports required`,children:[`Every class is public throughout its project. A class declared in any`,(0,s.jsx)(t,{children:`.sar`}),` file below `,(0,s.jsx)(t,{children:`source/`}),` is available to all other source files in that project.`]})]})}export{d as default};