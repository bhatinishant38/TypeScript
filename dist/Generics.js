// Generics are also templetes like interfaces
// example 1
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });
// exmaple 2
function pair(a, b) {
    return [a, b];
}
pair("masala", "test");
pair("masala", { flavour: "Ginger" });
const numberBox = {
    content: 10
};
const stringBox = {
    content: "cup"
};
const booleanBox = {
    content: false
};
const res = {
    status: 200,
    data: { flavor: "ginger" }
};
export {};
//# sourceMappingURL=Generics.js.map