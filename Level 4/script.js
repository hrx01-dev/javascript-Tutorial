// Async Await , promise chains and callback hell
// function hello() {
//     console.log("Hello");
// }
console.log("1");
setTimeout(() => {
    console.log("Hello");
}, 3000);
console.log("two");
console.log("Bye")

// synchronus programming needs the execution of code line by line in a order if one block is taking more time other blocks have to wait for it
// the asynchronus programming does not wait for the other blocks to finish.
// Callback is basically a function which is passed as a argument to the other function and is executed later
function sum(a, b) {
    console.log(a + b)
}
function calc(a, b, callback) {
    callback(a, b)
}
calc(1, 2, sum)

function getDta(Dataid, getNextData) {
    setTimeout(() => {
        console.log("data ", Dataid)
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

//Callback hell
getDta(1, () => {
    getDta(2, () => {
        getDta(3, () => {
            getDta(4, () => {
                getDta(5)
            })
        })
    })
})

// To prevent Callback hell we will now use promises
//Promise is a object which represent the value that may not be available now but will be available in the future
//  It can be either Resolved or Rejected

// let promise = new Promise((resolve, reject) => {
//     console.log("I am in Promise")
//     resolve("Success")
//     reject("Error")
// })
function fetchData(DataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", DataId)
            resolve("Success")

        }, 4000)
    })
}

fetchData(1)
// now let's use the promise
// we will use .then() to access the resolved value and .catch() to access the rejected value

let promise = fetchData(1)
promise.then((res) => {
    console.log("Resolved", res)
})
promise.catch((err) => {
    console.log("Rejected", err)
})

// Now move on to the promise chaining 
function asyncfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1")
            resolve("Success")
        }, 4000)
    })
}
function asyncfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2")
            resolve("Success")
        }, 4000)
    })
}
let p1 = asyncfunc1()
console.log("fetching Data1")
p1.then((res) => {
    console.log("Resolved", res);
    let p2 = asyncfunc2()
    console.log("fetching data2")
    p2.then((res) => {
        console.log("Resolved", res)
    })
})
// p1.catch((err) => {
//     console.log("Rejected", err)
// })
// let p2 = asyncfunc2()
// console.log("fetching data2")
// p2.then((res) => {
//     console.log("Resolved", res)
// })
// p2.catch((err) => {
//     console.log("Rejected", err)
// })
asyncfunc1.then((res) => {
    console.log("Resolved", res);

    console.log("fetching data2")
    asyncfunc2().then((res) => {
        console.log("Resolved", res)
    })
}).then((res) => {
    console.log("Resolved", res)
})

asyncfunc1().then((res) => {
    return asyncfunc2()
}).then((res) => {
    console.log("resolved", res)
})

// It is also complex let's move on to the async-await
// Async-Await is a special kind of syntax which makes the async code look synchronous
function api(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" FHIR data ", dataid)
            resolve("Success")

        }, 4000)
    })
}
async function apicall() {
    console.log("fetching data1")
    await api(2);
    console.log("fetching data2")
    await api(4);
    console.log("Finished")
}
// Currently the function needs to be called to execute 
//  Using IIFE is a way to handle this Immediately Invoked Function Expression
// it can be done using () don't name the function 
// wrt above example (async function apicall() { ... })()
(async function () {
    console.log("fetching data1")
    await api(2);
    console.log("fetching data2")
    await api(4);
    console.log("Finished")
})();