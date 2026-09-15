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

 let newValue : unknown
 newValue : "chai"
 newValue : [1,2,4]
 newValue : 2.4

 if (typeof newValue === "string"){
    newValue.toUpperCase()  
    
 }

 if(typeof newValue === "number"){
    console.log(newValue)
 }
