// first JavaScript Program

console.log("Hello , Jayam srivastava")
// Variable declaration- these are containers that store values
var x = 10
console.log(x + 30)
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
// Operators in jS
let ax = 10
let y = 30
console.log("X+Y = ", ax + y)
console.log(ax * y)
console.log(ax / y)
console.log(ax - y)
console.log(ax % y)
console.log(ax ** y)

// Unary operators
let a = 10
console.log(a++) // 10
console.log(++a) // 11

// assigment operator 

let cd = 5
cd += 4
console.log(cd)

// Compare operators
// types : equal to , not equal to , equal & type etc ...
let A = 10;
let B = 30;

console.log(A == B)
console.log(A != B)
console.log(A === B)
console.log(A !== B)

// Logical operator 

let F = 5;
let G = 10;
let H = 20;
let I = 20;
console.log(F != G || H > I)
console.log(F != G && H > I)
console.log(!(F != I))

// Conditional operator 
let age = 18;
if (age == 18) {
    console.log("You can apply for vote but not legally Drive")
}
else if (age > 18) {
    console.log("You can apply for vote and legally Drive")
}
else {
    console.log("You cannot apply for vote and legally Drive")
}
// Ternary operator 
let aged = 25;
let result = aged >= 18 ? "Adult" : "Minor";
console.log(result);
// how to take input
Years = prompt("Enter your age");
console.log(Years)
// loops 
// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }
//
// while loops
i = 0;
while (i <= 10) {
    console.log(i)
    i++
}
// for - of loop
let str = "jayam srivastava"
for (let i of str) {
    console.log(i);
}
// for-in loop
let students = {
    name: "jayam",
    age: 20,
    cgpa: 8.9,

}
for (let key in students) {
    console.log(key, students[key])
}
