class Chai {
     flavour : string ;
    //  price : number

//      constructor(flavour : string , price : number){
//         this.flavour = flavour
//         this.price = price
//      }

    constructor(flavour:string){
        this.flavour = flavour
        console.log(this)
    }
}

const masalaChai = new Chai('Masala')
masalaChai.flavour ='masala'



// access modifier(public or private in class) in ts

class chai {
    public flavour : string = "masala"
    private secretIngredients = "Cardamon"

    // reveal
    reveal(){
        return this.secretIngredients 
    }

   
}

const c = new chai()
c.reveal()   //use this for using secretIngrediants

// protected 
// it is accessed with in the class or inhertied class

class Shop {
     protected shopName = 'Chai corner'
}
class Branch extends Shop{
    getName(){
        return this.shopName
    }
}
new Branch().getName()

// this is also a syntax of private

class Wallet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}
const w = new Wallet()

// readonly properties in oop  (it can't be changed after one time asign)

class cup{
    readonly capacity :number= 250

    constructor(capacity : number){
        this.capacity = capacity
    }
}

// get and set method in oop
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }
    set sugar(value :number){
        if(value >5) throw new Error('Too sweet')
        this._sugar = value

    }
}

const a = new ModernChai()
a.sugar = 3


// static in oop

class EkChai {

    static shopName = "chaiCode caffe"

    constructor(public flavour :string){

    }

}
console.log(EkChai.shopName)

// abstract class 

abstract class Drink{
    abstract make():void
}

class Mychai extends Drink{
    make(){
        console.log('brewing')
    }
}

// composition in ts

class Heater{
    heat(){

    }
}

class ChaiMaker{
    constructor(private heater : Heater){
    }  
    make(){
        this.heater.heat
    }
}