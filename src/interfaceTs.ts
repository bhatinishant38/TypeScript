type orderChai = { 
    type: string;
    sugar: number; 
    strong: boolean 
};

function makeChai(order: orderChai) {
  console.log(order);
}

function orderChai(order: orderChai) {
  console.log(order);
}


type teaRecipe ={    //interface teaRecipe
    water :number
    milk :number
}

class MasalaChai implements teaRecipe{
    water =100
    milk =50
}


//  this is not allowed  ,use interface instead

// type CupSize = "small"  | "large"

// class Chai implements CupSize{   

// }


// use this 
interface CupSize {
    size : "small" | "large"
}

class Chai implements CupSize {
    size : "small" | "large" = "large"
}


//this is also not allowed
// type Response = {ok : true} | {ok :false}
// class myRes implements Response {
//     ok:boolean= true
// }

//use this instead

interface Response {
    ok : true | false
}
class myRes implements Response {
    ok:boolean = true
}

//Union or literal types
type TeaType = 'masala' | "ginger" | "lemon"

function orderNewChai(t : TeaType){
    console.log(t)
}


//intersection

type BaseChai = {teaLeaves : number }
type Extra = {masala : number}

type newMasalaChai = BaseChai & Extra

const cup : newMasalaChai = {
    teaLeaves: 2 ,
    masala :1
}

// condtional values in types

type User = {
    username : string 
    bio? : string
}

const u1 : User = { username : "Nishant"}
const u2 : User = {username :"Bhati" ,bio : "bio"}

// readonly values in types 
type config = {
    readonly appName : string
    version :number
}
const cfg :config= {
    appName :"nishant",
    version :1
}
// cfg.appName= 'ugg'