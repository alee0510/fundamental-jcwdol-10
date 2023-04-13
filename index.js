// console.log("Hello World");

// let numb = "101"
// numb = numb - 1
// console.log(numb)

// // exmple
// // 1. declaration and assignment values of array
// let students = ["John", "Peter", "Mary", "Jane", "Mark"];

// // 2. access the value of array -> index
// console.log(students[0]); // John
// console.log(students[1]); // Peter
// console.log(students[2]); // Mary
// console.log(students[3]); // Jane
// console.log(students[4]); // Mark
// console.log(students[-1]); // Mark
// // console.log(students[5]); // undefined

// addTwoNumberExpression(5, 5) // valid

// function addTwoNumberLiterral (number1, number2) {
//     console.log("result : ", number1 + number2)
// }
// addTwoNumberLiterral(3, 5)

// addTwoNumberExpression(5, 5) // invalid
// let addTwoNumberExpression = function (number1, number2) {
//     console.log("result : ", number1 + number2)
// }
// addTwoNumberExpression(3, 5)


function greetingMessage (name) { // root or parent function
    function greeting () { // sub function -> local scope
        return "Hello" + " " + name + "."
    }

    function welcome () { // sub function -> lo
        return "Wellcome to My Channel."
    }

    return greeting() + welcome()
}

greeting() // ReferenceError: greeting is not defined

console.log(greetingMessage("John"))

