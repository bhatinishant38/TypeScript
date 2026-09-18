const chaiFlavours = ["masala", "lemon", "adrak"];
const chaiprice = [2, 4, 5];
const rating = [3.4, 5, 6];
const menu = [
    { name: "masala", price: 13 },
    { name: "Adrak", price: 34 }
];
const cities = ['Delhi', 'jaipur'];
// cities.push('pune)  , this can't be done
const table = [
    [1, 2, 3],
    [2, 4, 6]
];
// Tuples 
let chaiTuple;
chaiTuple = ["masala", 20];
// chaiTuple = [ 20 , 'masala']  not allowed , should be in sequence
let userInfo;
userInfo = ['hitesh', 100];
userInfo = ['nishant', 100, false];
// readonly tuples
const location = [24.44, 56.66];
// named tuple
const chaiItems = ['masala', 40];
// Enums
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const size = cupSize.MEDIUM; // only have 3 values
var status;
(function (status) {
    status[status["PENDING"] = 100] = "PENDING";
    status[status["SERVED"] = 101] = "SERVED";
    status[status["CANCELLED"] = 102] = "CANCELLED"; //102
})(status || (status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making : ${type}`);
}
makeChai(ChaiType.GINGER);
//hetrogenus values in enum , means it contain 2 different data types
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "Chai";
})(RandomEnum || (RandomEnum = {}));
// Enum as constant
var sugars;
(function (sugars) {
    sugars[sugars["LOW"] = 1] = "LOW";
    sugars[sugars["MEDIUM"] = 2] = "MEDIUM";
    sugars[sugars["HIGH"] = 3] = "HIGH";
})(sugars || (sugars = {}));
const s = sugars.HIGH;
// push in enum , note - enum are like array we can push items in them
let t = ['chai', 10];
t.push('extra');
export {};
//# sourceMappingURL=ArrayEnum.js.map