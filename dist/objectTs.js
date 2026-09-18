const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 34,
    ingedients: ['adrak', 'milk']
};
let smallCup = { size: '200ml' };
let bigCup = { size: '500ml', material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "123"
};
const updateChai = (updates) => {
    console.log('updating chai with', updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "masala Chai",
    quantity: 4
});
const CoffeeInfo = {
    name: "Lemon Tea",
    price: 30
};
export {};
//# sourceMappingURL=objectTs.js.map