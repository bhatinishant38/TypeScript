const chaiFlavours : string[] = [ "masala","lemon","adrak"]
const chaiprice : number[] = [2,4,5]

const rating : Array <number> = [3.4,5,6]

type Chai = {
    name : string ,
    price : number
}

const menu : Chai[] = [
    {name : "masala" ,price :13},
    {name : "Adrak" , price : 34}
]

const cities : readonly string[] = ['Delhi', 'jaipur']
// cities.push('pune)  , this can't be done

const table : number[][] = [
    [1,2,3],
    [2,4,6]
]


// Tuples 

let chaiTuple : [ string , number]
chaiTuple = ["masala" ,20]
// chaiTuple = [ 20 , 'masala']  not allowed , should be in sequence

let userInfo : [ string , number , boolean?]
userInfo = [ 'hitesh' ,100]
userInfo = ['nishant', 100 ,false]


// readonly tuples
const location : readonly [number ,number] = [24.44 ,56.66]


// named tuple
const chaiItems : [name : string ,price : number] = [ 'masala', 40]



// Enums

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE 
}
const size = cupSize.MEDIUM  // only have 3 values

enum status {
    PENDING = 100,
    SERVED , //101
    CANCELLED  //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type : ChaiType){
    console.log(`Making : ${type}`)
}

makeChai(ChaiType.GINGER)

//hetrogenus values in enum , means it contain 2 different data types

enum RandomEnum {
    ID = 1,
    NAME = 'Chai'
}

// Enum as constant

const enum sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = sugars.HIGH


// push in enum , note - enum are like array we can push items in them
let t : [ string ,number] = ['chai',10]
t.push('extra')
