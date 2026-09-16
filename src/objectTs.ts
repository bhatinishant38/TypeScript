const chai = {
    name : "masala chai",
    price : 20,
    isHot : true
}

// let tea :{
//     name : string
//     price : number
//     isHot : boolean
// }
// tea ={
//     name : "Ginger tea",
//     price :25,
//     isHot : true
// }

type Tea = {
    name : string ;
    price : number;
    ingedients : string[]
}

const adrakChai : Tea = {
    name : "Adrak Chai",
    price : 34,
    ingedients : ['adrak','milk']

}


// Duck Type
type Cup = {size : string}
let smallCup : Cup = {size:'200ml'}

let bigCup = {size : '500ml' ,material : "steel"}

smallCup = bigCup

// another example
type brew = {brewTime : number}
const coffee = {brewTime:5 ,beans : "Arabica"}

const chaiBrew : brew = coffee

// another one

type User = {
    username : string ,
    password : string 
}

const u : User = {
    username : "chaicode",
    password : "123"
}


// spliting dataTypes
type Item = {name : string , quantity : number}
type Address = {street : string , pin : number}
type Order = {
    id: string;
    items : Item[];
    address : Address
}

// partial in object
type Chai = {
    name : string ;
    price : number;
    isHot : boolean;

}

const updateChai = (updates : Partial <Chai>)=>{
    console.log('updating chai with' , updates)
}

updateChai({price:25})
updateChai({isHot: false})
updateChai({})


// required in object
type ChaiOrder = {
    name?: string;
    quantity ?:  number
}
type ChaiPlaceOrder = Required <ChaiOrder>

const placeOrder = (order : ChaiPlaceOrder)=>{
    console.log(order)
}

placeOrder({
    name : "masala Chai",
    quantity : 4
})


// Pick in object

type Coffee ={
    name : string 
    price : number
    isHot : boolean
    ingredients :string
}

type BasicCoffeeInfo  = Pick <Coffee, 'name'| 'price'>

const CoffeeInfo : BasicCoffeeInfo = {
    name : "Lemon Tea",
    price : 30
}


// Omit in objects
type newCoffee ={
    name : string 
    price : number
    isHot : boolean
    secretIngredients :string
}

type PublicChai = Omit <Chai , "secretIngredients">

