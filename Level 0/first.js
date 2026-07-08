// first JavaScript Program

console.log("Hello , Jayam srivastava")
// Variable declaration- these are containers that store values
// var x = 10
// console.log(x + 30)
// Rules for variable
// It should contain unique character , it treats "a"& "A" differently.
// use camel case -firstName , lastName
// Keywords 
// var , const , let 
// These are reserved words in JS 
// var - can be redeclared and reinitialised
// let - can be redeclared but not reinitialised
// const - can neither be redeclared nor reinitialised
let name = "jayam srivastava"
// name = "j"  It can be updated within a variable unlike var that requires new var for updating .
console.log(name)
const PI = 3.14;
console.log(PI)
// let can be initialize later but not the const 

// Data Types
// number, string, boolean, null, undefined , symbol , BigInt
// typeof data_type tells the type 

let age = 24;
let isFollow = true;
let x = null;
let names = BigInt(56);

// Non - primitive 
const Student = {
    Name: "hrx01-dev",
    age: 18,
    Course: "Btech",
    CGPA: 8.5,


}
console.log(Student.age)