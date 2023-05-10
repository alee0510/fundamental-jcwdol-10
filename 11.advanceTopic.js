// synchronous vs asynchronous
console.log("Hello")
console.log("World")

// async
setTimeout(() => console.log("Time Out"), 5000)
setInterval(() => console.log("Interval"), 2000)

// sync
console.log("I'm Happy")

// for (let i = 0; i < 10000000000; i++) { // heavy task and blocking
    
// }

// console.log("Done.")

// from sync to async
// Promise -> resolve and reject
// const HeavyPromiseTask = new Promise((resolve, reject) => {
//     for (let i = 0; i < 100000000; i++) { // heavy task and blocking
//         if (i % 2 === 0 && i <= 100000 && i >= 50000) {
//             resolve(i)
//         }
//     }
//     reject("Not Found.")
// })

// console.log(HeavyPromiseTask)

// HeavyPromiseTask
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

// console.log(HeavyPromiseTask)

const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve("My Promise.")
    }, 5000)
})
console.log(MyPromise)

MyPromise
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("Finally"))

console.log("after promise.")
