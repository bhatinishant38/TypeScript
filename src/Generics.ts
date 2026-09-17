// Generics are also templetes like interfaces


// example 1
function wrapInArray<T>(item:T):T[]{
    return [item]
}
wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour : "Ginger"})


// exmaple 2
function pair<A, B>(a:A ,b: B) : [A ,B]{
    return [a ,b]
}
pair("masala" ,"test")
pair("masala",{flavour : "Ginger"})


// Genertics Interfaces

interface Box<T> {
    content : T
}

const numberBox : Box<number> = {  // for number
    content :10
}
const stringBox : Box<string> = {    // for string
    content : "cup"
}
const booleanBox : Box<boolean> = {   // for boolean
    content : false
}

// use in api responses

interface ApiPromise<T>{
    status : number,
    data : T
}
const res : ApiPromise<{flavor:string}>={
    status :200,
    data : {flavor : "ginger"} 
}