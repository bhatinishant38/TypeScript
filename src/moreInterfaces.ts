// interface work as like a type and they are templetes on which objects are made

interface Chai {
    flavour : string,
    price : number,
    milk? : boolean
}

const masala : Chai = {
    flavour : "masala",
    price : 40
}


// readonly in interface
interface Shop{
    readonly id : number,
    name : string
}

const s: Shop = {id:1 ,name: "chaicode caffee"}
// s.id= 3  // this can not be done ,because it is readonly property


// interface in function
interface DiscountCalculator{
    (price : number) : number
}

const apply50 : DiscountCalculator = (p) => p * 0.5

interface TeaMachine{
    start() : void;
    stop() : void
}

const machine : TeaMachine = {
    start() {
        console.log('start')
    },
    stop(){
        console.log('stop')

    }
}

// some other feature 

interface ChaiRatings{
    [flavour :string] :number
}

const Ratings : ChaiRatings = {
    masala : 4.5 ,
    ginger : 4.5,
}


// multiple interfaces with same names

interface User {
    name : string 
}

interface User {
    age : number
}

const u : User ={
    name : "Hitesh",
    age : 21
}

// extending interfaces

interface A {a : string}
interface B {b : string}

interface C extends A,B {}