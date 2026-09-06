import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-DsMy65XT.js";import{t as r}from"./Callout-DYL3CA2W.js";import{t as i}from"./Heading-f29G7vJT.js";import{t as a}from"./DocPage-BaNKuphE.js";var o=e(),s=`define Position {
    var x int64 = 0
    var y int64 = 0

    func move(change_x int64, change_y int64) {
        x = x + change_x
        y = y + change_y
    }
}

define Motion [Position] {
    var speed int64 = 5
}

class Entity [
    Motion as MainMotion {
        speed = 10
    }
] {
    var name string = "Unknown"
}

func main() {
    local var entity Entity = Entity.new(
        name: "Player"
        main_motion.position.x: 20
    )
    entity.main_motion.position.move(5, 2)
    print(entity.main_motion.position.x)
}`;function c(){return(0,o.jsxs)(a,{title:`Defines`,lead:`Reusable state and behaviour composed into classes or other defines.`,children:[(0,o.jsx)(i,{id:`declaration`,children:`Declaring and composing defines`}),(0,o.jsx)(n,{code:s,label:`composition.sar`}),(0,o.jsx)(`p`,{children:`A define can contain variable and constant fields, methods, and other composed defines. A class lists its defines between square brackets after the class name. Each composed define becomes a namespaced component of every class instance.`}),(0,o.jsx)(i,{id:`namespaces`,children:`Component namespaces and aliases`}),(0,o.jsxs)(`p`,{children:[`Without an alias, the define name is converted to snake case: `,(0,o.jsx)(t,{children:`Position`}),`becomes `,(0,o.jsx)(t,{children:`position`}),`. Use `,(0,o.jsx)(t,{children:`as Alias`}),` to select a different namespace; `,(0,o.jsx)(t,{children:`MainMotion`}),` becomes`,(0,o.jsx)(t,{children:`main_motion`}),`. Nested compositions form nested member paths.`]}),(0,o.jsx)(i,{id:`configuration`,children:`Composition configuration`}),(0,o.jsx)(`p`,{children:`An optional block after a composed define changes its field defaults for that composition. Construction may override class fields and composed fields using complete dotted paths. Configuration and constructor values must match the field type, and each path may appear only once.`}),(0,o.jsx)(i,{id:`methods`,children:`Define methods`}),(0,o.jsx)(`p`,{children:`A define method directly accesses its own fields and methods. It accesses a composed define through that define's namespace. Class methods likewise access composed defines through their namespaces.`}),(0,o.jsxs)(r,{variant:`note`,title:`Defines are composition units`,children:[`Defines are project-wide and public, but they are not constructed with`,(0,o.jsx)(t,{children:`.new()`}),` and are not used as standalone variable types. A class owns the complete composed value and its lifetime.`]}),(0,o.jsx)(r,{variant:`warning`,title:`Composition conflicts are rejected`,children:`A class or define cannot compose itself, repeat a namespace, or introduce conflicting field and method names through composition.`})]})}export{c as default};