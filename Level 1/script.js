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