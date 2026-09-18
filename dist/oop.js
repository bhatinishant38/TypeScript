class Chai {
    flavour;
    //  price : number
    //      constructor(flavour : string , price : number){
    //         this.flavour = flavour
    //         this.price = price
    //      }
    constructor(flavour) {
        this.flavour = flavour;
        console.log(this);
    }
}
const masalaChai = new Chai('Masala');
masalaChai.flavour = 'masala';
// access modifier(public or private in class) in ts
class chai {
    flavour = "masala";
    secretIngredients = "Cardamon";
    // reveal
    reveal() {
        return this.secretIngredients;
    }
}
const c = new chai();
c.reveal(); //use this for using secretIngrediants
// protected 
// it is accessed with in the class or inhertied class
class Shop {
    shopName = 'Chai corner';
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
new Branch().getName();
// this is also a syntax of private
class Wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
// readonly properties in oop  (it can't be changed after one time asign)
class cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// get and set method in oop
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error('Too sweet');
        this._sugar = value;
    }
}
const a = new ModernChai();
a.sugar = 3;
// static in oop
class EkChai {
    flavour;
    static shopName = "chaiCode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
// abstract class 
class Drink {
}
class Mychai extends Drink {
    make() {
        console.log('brewing');
    }
}
// composition in ts
class Heater {
    heat() {
    }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oop.js.map