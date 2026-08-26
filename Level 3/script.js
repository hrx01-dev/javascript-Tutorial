// Classes and Objects
const Student = {
    name: "John",
    age: 20,
    grade: 90,
    hobbies: ["Coding", "Gaming", "Reading"],
    PrintAge: function () {
        console.log("Age =", this.age)
    }
}

console.log(Student)
const Ram = {
    age: 10
}
Ram.__proto__ = Student // How to set a prototype

//prototype are basically a object under a object that is defined by default
// it contains all the methods and property of the parent object
// Classes - Blueprint of objects

class Students {
    constructors(name, age, grade, hobbies) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.hobbies = hobbies;
    }
    names() {
        console.log("Name = ", this.name)
    }
    ages() {
        console.log("Age = ", this.age)
    }
    grades() {
        console.log("Grade = ", this.grade)
    }
    hobbies() {
        console.log("Hobbies = ", this.hobbies)
    }
}

let Shyam = new Students()  // new is a keyword used for creating new object from the class
// Inheritance is a method to pass down properties from parents to child class.
class Parent {
    hello() {
        console.log("HiLo ", this.name)
    }
}
class child extends parent {
    study() {
        console.log("study today for better tomorrow")
    }
}
// If child and parent class have same function , child will be used.
// Super keyword - It is used to call constuctors of the parent class or to use properties of the parent class
class Parent {
    constructor(name) {
        console.log("Parent Constructor")
        this.name = name
    }
    hello() {
        console.log("HiLo ", this.name)
    }
}
class child extends parent {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
        console.log("Child Constructor")
    }
    study() {
        super.hello()
        console.log("study today for better tomorrow")
    }
}
// try - catch basically used for error handling 
var a = 10;
var b = 5;
console.log("a+b", a + b);
try {
    console.log(c + d);
} catch (err) {
    console.log("Error = ", err)
}
finally {
    console.log("Finaly")
}