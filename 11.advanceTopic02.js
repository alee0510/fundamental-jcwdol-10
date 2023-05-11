// async await

// traditional way to create a function that return a Promise
// function sleep(time_in_ms) {
//     return new Promise(resolve => setTimeout(resolve, time_in_ms));
// }

// using async key
async function sleep() {
    return "sleep" // auto resolve
}

// sleep()
// .then((value) => console.log(value))

// throw error within aync function
async function getDataFromServer (success) {
    if (success) {
        for (let i = 0; i < 10000000; i++) {
        }
        return "success" // resolve the promise
    } else {
        throw "error from server" // reject the promise
    }
}

getDataFromServer(true)
.then(value => {
    console.log("resolve", value)
    sleep()
    .then(value => {
        console.log(value)
        //
    })
})
.catch(error => console.log("reject", error))

// await is used to wait for a promise to resolve
// await can only be used within a async function
// await will block the execution of the code until the promise is resolved

async function resolveAllPromise () { // async function
    // error handler : try and catch
    try {
        const data = await getDataFromServer(true) // async function
        console.log("from server", data)
    
        const sleepValue = await sleep() // async function
        console.log("sleep", sleepValue)

        return "done."
    } catch (error) {
        console.log("catch : ", error)
    }
}

resolveAllPromise()
.then(value => console.log(value))

console.log("after promise.") // sync