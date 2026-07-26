// Introduction to Array 

let stu = [78, 86, 89, 80, 80];
console.log(stu)
console.log(stu.length)
// Indexing is done as the same way as string 
console.log(stu[2])
// updating values 
stu[2] = 90;
console.log(stu);
for (let i = 0; i < stu.length; i++) {
    console.log(stu[i])
}
for (let s of stu) {
    console.log(s)
}
// array methods

console.log(stu.push(80, 86, 70, 38, 56))// will add this entry at the end of the array 
console.log(stu.pop())// will remove the last entry of the array
console.log(stu.toString())
console.log(stu.concat([80, 86, 70, 38, 56]))
console.log(stu.unshift(19, 58, 78))// will add the value at the begining
console.log(stu.slice(1, 3))
console.log(stu.splice(2, 1, 50))// will remove the value at the index 2 and add the value 50 at the index 2 
// Function - Functions are the block of code that is used to perform a particular task
function hello() {
    console.log("Hello World")
}
hello()
// Functions with parameters and retuning values 
function myName(name) {
    console.log(`Hello ${name}`)
}
myName("Jayam")


function add(a, b) {
    return a + b
}
console.log(add(10, 20))
// Function parameters are like local variable it can't be called outside the function 
// Arrow functions 
const sum = (a, b) => {
    return a + b
}
console.log(sum(10, 20))
// higher order functions - functions that takes function as an argument or retuns a function 
// For each loop
//Callback function - A function passed as an argument to another function is called a callback function
let arr = [2, 6, 8, 10, 112];
arr.forEach(function (el) {
    console.log(el);
})
arr.forEach(function (el) {
    let mul = el * el;
    console.log(`the multiple of ${el} is ${mul}`);
})
// more array methods

//.map ()
let newarr = arr.map((el) => {
    return el * 2
})
console.log(newarr)
// filter 

let Newarr = arr.filter((val) => {
    if (val % 2 == 0)
        return true;
}

)
console.log(Newarr)
// reduce method
ARR = [1, 7, 9, 10, 56];
const ini = 100;
const red = ARR.reduce((res, curr) => {
    return res + curr
}, ini)
console.log(red)
console.log(alert("Hello World"))

// window object - it is browser's object not javascript's automatically created by browser
alert("hello")
// What is DOM ?
// when a webpage is loaded it creates  a dom , atree like  structure 
console.dir(window.document.body);