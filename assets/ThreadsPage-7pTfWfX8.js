import{t as e}from"./jsx-runtime-Cltr0gcK.js";import{n as t,t as n}from"./CodeBlock-CfUYbvDv.js";import{t as r}from"./Callout-DGneS21x.js";import{t as i}from"./Heading-CtLDK4Z6.js";import{b as a}from"./index-Cwm0VSKK.js";import{t as o}from"./DocPage-BaNKuphE.js";var s=e(),c=`func total(values int64[]) int64 {
    local var sum int64 = 0
    for value in values {
        sum = sum + value
    }
    return sum
}

func main() {
    local var data int64[] = [1, 2, 3, 4]
    local var job job[int64] = run total(data)
    print(job.wait())
}`,l=`func count_to(limit int64) int64 {
    local var sum int64 = 0
    for value in 0 to limit {
        sum = sum + value
    }
    return sum
}

func main() {
    local var jobs job[int64][] = []
    for part in 1 to 4 {
        jobs.add(run count_to(part * 1000))
    }
    for job in jobs {
        print(job.wait())
    }
}`,u=`func total(values int64[]) int64 {
    local var sum int64 = 0
    for value in values {
        sum = sum + value
    }
    return sum
}

func main() {
    local var left int64[] = [1, 2, 3]
    local var right int64[] = [10, 20]
    local var left_sum int64 = 0
    local var right_sum int64 = 0
    together {
        left_sum = run total(left)
        right_sum = run total(right)
    }
    print(left_sum + right_sum)
    print(left)
}`,d=`var score int64 = 0

func work(values int64[]) int64 {
    score = score + 1
    return values.length
}

func main() {
    local var data int64[] = [1]
    local var job job[int64] = run work(data)
}`;function f(){return(0,s.jsxs)(o,{title:`Threads`,lead:`Run functions on several CPU cores at once, without data races.`,children:[(0,s.jsx)(i,{id:`run`,children:`Starting a thread`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(t,{children:`run function(arguments)`}),` starts the function on a new thread and immediately returns a `,(0,s.jsx)(t,{children:`job`}),`. A job that produces a value has the type`,` `,(0,s.jsx)(t,{children:`job[T]`}),`, where `,(0,s.jsx)(t,{children:`T`}),` is the function's return type; a job for a function without a return value has the type `,(0,s.jsx)(t,{children:`job`}),`.`,` `,(0,s.jsx)(t,{children:`job.wait()`}),` waits for the thread to finish and returns its result:`]}),(0,s.jsx)(n,{code:c,label:`run.sar`}),(0,s.jsx)(n,{code:`10`,language:`text`,label:`Output`}),(0,s.jsxs)(`p`,{children:[`A job started with `,(0,s.jsx)(t,{children:`run`}),` takes ownership of its arguments: arrays, dictionaries and class instances move into the thread, exactly like a`,` `,(0,s.jsx)(t,{children:`take`}),` parameter (see`,` `,(0,s.jsx)(a,{to:`/docs/language/values-and-copying`,children:`Values and copying`}),`). Pass`,` `,(0,s.jsx)(t,{children:`value.duplicate()`}),` to keep your own copy. Numbers, booleans and strings are copied as usual.`]}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(t,{children:`run`}),` only starts functions declared with`,` `,(0,s.jsx)(t,{children:`func`}),`. A job must be kept, so a bare`,` `,(0,s.jsx)(t,{children:`run work(data)`}),` line reports`,` `,(0,s.jsx)(t,{children:`keep the job from 'run' in a variable, or start it inside 'together'`}),`.`]}),(0,s.jsx)(i,{id:`jobs`,children:`Waiting for jobs`}),(0,s.jsx)(`p`,{children:`Jobs can be kept in local variables and local arrays, so a loop can start one thread per piece of work:`}),(0,s.jsx)(n,{code:l,label:`many_jobs.sar`}),(0,s.jsx)(n,{code:`500500
2001000
4501500
8002000`,language:`text`,label:`Output`}),(0,s.jsxs)(`p`,{children:[`Call `,(0,s.jsx)(t,{children:`wait()`}),` once per job; a second call stops the program with`,` `,(0,s.jsx)(t,{children:`runtime error: this job was already waited for`}),`. A job that leaves scope without being waited for is waited for automatically, so no thread outlives the code that started it. Jobs cannot be stored in fields, globals, dictionaries, parameters or return values, and they cannot be printed or duplicated.`]}),(0,s.jsx)(i,{id:`together`,children:`Together`}),(0,s.jsxs)(`p`,{children:[`A `,(0,s.jsx)(t,{children:`together`}),` block starts every `,(0,s.jsx)(t,{children:`run`}),` line in it at once and continues only after all of them finish. Because the block waits, its threads borrow their arguments instead of taking them, and results can be assigned straight into local variables:`]}),(0,s.jsx)(n,{code:u,label:`together.sar`}),(0,s.jsx)(n,{code:`36
[1, 2, 3]`,language:`text`,label:`Output`}),(0,s.jsxs)(`p`,{children:[`A `,(0,s.jsx)(t,{children:`together`}),` block can only contain `,(0,s.jsx)(t,{children:`run`}),` `,`lines, with or without `,(0,s.jsx)(t,{children:`variable =`}),` in front. Each value can be used by only one of its threads, so two threads can never change the same data:`,` `,(0,s.jsx)(t,{children:`'shared' is used by more than one 'run' in this 'together' block; give each thread its own data`}),`. Each variable can receive one result per block.`]}),(0,s.jsx)(i,{id:`safety`,children:`What thread code cannot touch`}),(0,s.jsxs)(`p`,{children:[`A function started with `,(0,s.jsx)(t,{children:`run`}),`, and every function, method and constructor it calls, cannot use `,(0,s.jsx)(t,{children:`var`}),` globals, globals that hold arrays, dictionaries or objects, or signals. Constant numbers, booleans and strings are fine, and so are `,(0,s.jsx)(t,{children:`print`}),`, files, networking and the random functions:`]}),(0,s.jsx)(n,{code:d,label:`shared_state.sar`}),(0,s.jsx)(n,{code:`shared_state.sar:4:5: error: 'work' runs on a thread and cannot use the global 'score'`,language:`text`,label:`Compiler output`}),(0,s.jsxs)(`p`,{children:[`When the global is used further down the call chain, the error names both functions, as in`,` `,(0,s.jsx)(t,{children:`'helper' runs on a thread (started as 'work') and cannot use the global 'score'`}),`. Together with single ownership, these rules mean Sarlin programs cannot have data races.`]}),(0,s.jsxs)(r,{variant:`note`,title:`Random numbers and the playground`,children:[`Each thread has its own random number generator, so `,(0,s.jsx)(t,{children:`random_seed`}),` `,`only affects the thread that calls it. The browser playground has no threads; there a job runs to completion as soon as it is started, which gives the same results.`]})]})}export{f as default};