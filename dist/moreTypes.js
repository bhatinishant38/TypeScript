// let response:any = 'bhati'
// let numericLength : number =( response as string).length
// // type assertion
// type Book = {
//     name: string
// }
// let bookString = '{"name":"who moved my cheese"}'
// let bookObject = JSON.parse(bookString) as Book
// console.log(bookObject)
// let inputElemnt = document.querySelector("username")  as HTMLInputElement
// any and unknown
// let value : any
//  value = 'chai'
//  value = [1,2,3]
//  value = 2.5
//  value.toUpperCase()
let newValue;
newValue = "chai";
newValue = [1, 2, 4];
newValue = 2.4;
if (typeof newValue === "string") {
    newValue.toUpperCase();
    console.log('vvvvvvvvvvvv');
}
if (typeof newValue === "number") {
    console.log(newValue);
}
// try catch
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log('Error', error);
}
const data = "chai and code";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === 'admin') {
        console.log('Redirecting to admin dashboard');
        return;
    }
    if (role === 'user') {
        console.log('Redirecting to user dashboard');
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
export {};
//# sourceMappingURL=moreTypes.js.map