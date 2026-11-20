import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-Bt71XjRG.js";import{t as r}from"./Callout-Di3xoH1Z.js";import{t as i}from"./Heading-CikHdSQ2.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`func main() {
    local var first int64[] = [1, 2]
    local var second int64[] = first
    second[0] = 99
    print(second)
}`,c=`func main() {
    local var first int64[] = [1, 2]
    local var second int64[] = first
    print(first)
}`,l=`class Bag {
    var items string[][] = []

    func keep(take item string[]) {
        items.add(item)
    }
}

func count(values string[]) uint64 {
    return values.length
}

func main() {
    local var bag Bag = Bag.new()
    local var item string[] = ["sword"]
    print(count(item))
    bag.keep(item)
    item = ["shield"]
    print(bag.items)
    print(item)
}`,u=`class Player {
    var name string = "Bob"
    var scores int64[] = [10]
}

func main() {
    local var player Player = Player.new()
    local var copy Player = player.duplicate()
    copy.scores.add(20)
    print(player.scores)
    print(copy.scores)
}`,d=`class Entity {
    var name string = ""
    var target int64 = -1
}

func main() {
    local var entities Entity[] = [Entity.new(name: "hero"), Entity.new(name: "slime")]
    entities[1].target = 0
    print(entities[entities[1].target].name)
}`;function f(){return(0,o.jsxs)(a,{title:`Values and copying`,lead:`Which Sarlin values are copied, how managed values are owned, moved and borrowed, and how to request a copy.`,children:[(0,o.jsx)(i,{id:`value-types`,children:`Value types`}),(0,o.jsx)(`p`,{children:`Numbers, booleans and strings behave as values. Assignment, function arguments and return values copy them, so changing the copy never changes the original. Strings are immutable, so Sarlin shares their bytes internally without that ever being visible.`}),(0,o.jsx)(i,{id:`ownership`,children:`Owned values`}),(0,o.jsxs)(`p`,{children:[`Arrays, dictionaries, class instances, `,(0,o.jsx)(t,{children:`Time`}),` values and network connections are managed values. Each one has exactly one owner: a variable, a field, a collection element or a running function. Sarlin has no garbage collector and no shared references. A managed value is freed at the exact point its owner goes away, for example when a local variable leaves its block.`]}),(0,o.jsx)(i,{id:`moves`,children:`Moves`}),(0,o.jsxs)(`p`,{children:[`Assigning a managed value, returning it, storing it in a field or collection, or passing it to a `,(0,o.jsx)(t,{children:`take`}),` parameter moves it. The new owner gets the value and the old variable can no longer be used:`]}),(0,o.jsx)(n,{code:s,label:`move.sar`}),(0,o.jsx)(n,{code:`[99, 2]`,language:`text`,label:`Output`}),(0,o.jsx)(n,{code:c,label:`use_after_move.sar`}),(0,o.jsx)(n,{code:`use_after_move.sar:4:11: error: 'first' was moved on line 3 and can no longer be used`,language:`text`,label:`Compiler output`}),(0,o.jsxs)(`p`,{children:[`Assigning a new value to a moved variable makes it usable again. A variable that is moved inside a loop must be given a new value before the loop repeats, otherwise the compiler reports `,(0,o.jsx)(t,{children:`'NAME' was moved in an earlier loop iteration and can no longer be used; give it a new value before the loop repeats`}),`. A variable moved in only one branch of an `,(0,o.jsx)(t,{children:`if`}),` cannot be used after the `,(0,o.jsx)(t,{children:`if`}),` either.`]}),(0,o.jsx)(i,{id:`borrowing`,children:`Borrowing and take`}),(0,o.jsxs)(`p`,{children:[`A plain parameter borrows its argument: the function can read and change the value, but the caller keeps ownership and the value cannot leave the function. Mark a parameter with`,` `,(0,o.jsx)(t,{children:`take`}),` when the function should become the owner, for example to store the value:`]}),(0,o.jsx)(n,{code:l,label:`borrow_and_take.sar`}),(0,o.jsx)(n,{code:`1
[["sword"]]
["shield"]`,language:`text`,label:`Output`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`take`}),` only applies to managed types; on a number, boolean or string it reports`,` `,(0,o.jsx)(t,{children:`'take' only applies to arrays, dictionaries and class instances; 'int32' is always copied`}),`. A function with `,(0,o.jsx)(t,{children:`take`}),` parameters cannot be used as a callable. Loop values in `,(0,o.jsx)(t,{children:`for value in collection`}),` borrow their element in the same way as parameters.`]}),(0,o.jsx)(i,{id:`cannot-move`,children:`What cannot be moved`}),(0,o.jsx)(`p`,{children:`Only a value with a single clear owner can move. Each of these is a compile error:`}),(0,o.jsxs)(`ul`,{children:[(0,o.jsxs)(`li`,{children:[`Moving a borrowed parameter:`,` `,(0,o.jsx)(t,{children:`cannot move borrowed 'values'; use 'values.duplicate()' to make a copy or mark the parameter 'take'`})]}),(0,o.jsxs)(`li`,{children:[`Moving a loop value:`,` `,(0,o.jsx)(t,{children:`cannot move 'item' out of the collection being looped over; use 'item.duplicate()' to make a copy`})]}),(0,o.jsxs)(`li`,{children:[`Moving a field out of its object, including returning a field from a method:`,` `,(0,o.jsx)(t,{children:`cannot move field 'values' out of its object; use '.duplicate()' to make a copy`})]}),(0,o.jsxs)(`li`,{children:[`Moving an element out of an array or dictionary, including the result of`,` `,(0,o.jsx)(t,{children:`get`}),`:`,` `,(0,o.jsx)(t,{children:`cannot move a value out of a collection; use '.duplicate()' to make a copy`})]}),(0,o.jsxs)(`li`,{children:[`Moving a global:`,` `,(0,o.jsx)(t,{children:`cannot move global 'settings'; use 'settings.duplicate()' to make a copy`})]}),(0,o.jsxs)(`li`,{children:[`Moving `,(0,o.jsx)(t,{children:`self`}),`:`,` `,(0,o.jsx)(t,{children:`cannot move 'self'; use 'self.duplicate()' to make a copy`})]}),(0,o.jsxs)(`li`,{children:[`Moving a value into a call that also borrows it:`,` `,(0,o.jsx)(t,{children:`'pair' is moved into this call and cannot also be used by it`})]}),(0,o.jsxs)(`li`,{children:[`Storing a value inside itself, as in `,(0,o.jsx)(t,{children:`node.next = node`}),`:`,` `,(0,o.jsx)(t,{children:`cannot move 'node' into itself`})]})]}),(0,o.jsx)(`p`,{children:`These rules mean two variables never refer to the same managed value, so no value can be freed while something still uses it and no reference cycles can form.`}),(0,o.jsx)(i,{id:`copies`,children:`Copies`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(t,{children:`duplicate()`}),` makes a full, independent copy of an array, dictionary, class instance or `,(0,o.jsx)(t,{children:`Time`}),` value, including every nested collection and object. Use it whenever you need a second owner:`]}),(0,o.jsx)(n,{code:u,label:`duplicate.sar`}),(0,o.jsx)(n,{code:`[10]
[10, 20]`,language:`text`,label:`Output`}),(0,o.jsxs)(`p`,{children:[`Network connections cannot be copied; duplicating an object that holds one stops the program with `,(0,o.jsx)(t,{children:`runtime error: a network connection cannot be duplicated`}),`. The removed `,(0,o.jsx)(t,{children:`duplicate_deep()`}),` reports`,` `,(0,o.jsx)(t,{children:`'duplicate_deep()' was removed; 'duplicate()' now copies everything`}),`.`]}),(0,o.jsx)(i,{id:`handles`,children:`Referring to a value from several places`}),(0,o.jsx)(`p`,{children:`When several parts of a program need to refer to the same object, keep the objects in one owning collection and store their position (or an id) instead of the object. This is the usual pattern in game engines and keeps every object with one owner:`}),(0,o.jsx)(n,{code:d,label:`handles.sar`}),(0,o.jsx)(n,{code:`hero`,language:`text`,label:`Output`}),(0,o.jsx)(i,{id:`constants`,children:`Constants and fixed collections`}),(0,o.jsxs)(`p`,{children:[`A `,(0,o.jsx)(t,{children:`const`}),` declaration cannot be reassigned. An array or dictionary declared as a constant also cannot be indexed or resized through its constant name. Because a managed value has a single owner, nothing else can change a constant collection.`]}),(0,o.jsxs)(`p`,{children:[`Fixed array and dictionary types prevent their size from changing. Their mutable elements may still be replaced. A constant class reference cannot be reassigned, but the instance's`,(0,o.jsx)(t,{children:`var`}),` fields and methods remain mutable.`]}),(0,o.jsxs)(r,{variant:`note`,title:`Equality`,children:[(0,o.jsx)(t,{children:`==`}),` on class instances still compares identity, so two separately created objects are never equal, even with the same field values.`]})]})}export{f as default};