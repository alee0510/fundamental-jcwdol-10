// problem01 : check whether the date is a weekend -> output: true or false
// algorithm:
// create a function that takes a date as an argument with format "yyyy-mm-dd"
// create a new Date object with the date argument
// get the day of the week from the date object, day of the week is a number from 0 to 6
// if the day of the week is 0 or 6, return true, otherwise return false

function isWeekend(date) {
    if(!date || typeof date !== 'string') return 'invalid input'

    const dateObject = new Date(date)
    const dayOfWeek = dateObject.getDay()
    if(isNaN(dayOfWeek)) return 'invalid input'
    if (dayOfWeek === 0 || dayOfWeek === 6) return true
    return false
}

// problem 02 : find greates common division of two numbers using while loop
function findGreatesCommonDivision (a, b) { 
    if (a === 0 || b === 0) return 0
    if (a === b) return a
    if (a > b) {
        while (a % b !== 0) {
            const temp = a % b
            a = b
            b = temp
        }
        return b
    } else {
        while (b % a !== 0) {
            const temp = b % a
            b = a
            a = temp
        }
        return a
    }
}

// problem 03 : last common multiple of two numbers using while loop
// algorithm:
// check if a < b start loop
// if b < a, swap a and b
// looping start with i = 2
// modulus b % (a * i) === 0, return a * i
// else i++
function findLastCommonMultiple (a, b) {
    if ( a > b) {
        const temp = a
        a = b
        b = temp
    }

    let i = 2
    while ((a * i) % b !== 0) {
        i++
    }
    return a * i
}

console.log(findLastCommonMultiple(2, 3))
console.log(findLastCommonMultiple(4, 10))
console.log(findLastCommonMultiple(3, 5))
console.log(findLastCommonMultiple(5, 7))

// problem 3 : find the most common character in a string
// algorithm:
// create a function that takes a string as an argument
// take the first char and add count 0
// loop through the string, if the char is the same as the first char, add count +1
// take second chart and add count 0
// loop through the string, if the char is the same as the second char, add count +1
// compare the count of the first char and the second char, if the first char count is greater than the second char count
// take the first char as the most common char
// loop and compare to the next char until we get the most common char

function findMostCommonChar (string) {
    let mostCommonChar = string[0]
    let mostCommonCharCount = 0

    for (let i = 0; i < string.length; i++) { 
        let comparedChar = string[i]
        let comparedCharCount = 0
        for (let j = i + 1; j < string.length; j++) {
            if (string[j] === comparedChar) comparedCharCount++
        }
        if (comparedCharCount >= mostCommonCharCount) {
            mostCommonChar = comparedChar
            mostCommonCharCount = comparedCharCount
        }
    }

    if (mostCommonCharCount === 0) return 'no common char'
    return mostCommonChar
}

console.log(findMostCommonChar('abca'))
console.log(findMostCommonChar('abcaaa'))
console.log(findMostCommonChar('helloworld'))
console.log(findMostCommonChar('abc'))
console.log(findMostCommonChar('aabcdd')) // no common char

module.exports = {
    isWeekend
};
