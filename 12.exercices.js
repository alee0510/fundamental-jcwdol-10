function convertStringToColoumnNumber (str) {
    // validate input
    if (typeof str !== 'string') return 'Invalid input'
    
    // convert string to column number with A = 1, Z = 26, AA = 27, ...
    // chartCode from A to Z is 65 to 90
    let uppercase = str?.toUpperCase()
    if (uppercase.length === 1) return uppercase.charCodeAt(0) - 64
    return 26 * (uppercase.charCodeAt(0) - 64) + (uppercase.charCodeAt(1) - 64)
}

function findTheSingleNumber (arrayOfInteger) {
    if (!Array.isArray(arrayOfInteger)) return 'Invalid input'
    if (arrayOfInteger.length === 0) return -1
    if (arrayOfInteger.length === 1) return arrayOfInteger[0]

    let i = 0
    let sortedArrayOfInteger = arrayOfInteger.sort()
    while (i < sortedArrayOfInteger.length) {
        if (!sortedArrayOfInteger.includes(sortedArrayOfInteger[i], i + 1)) return sortedArrayOfInteger[i]
        i += 2
    }

    // if all number is duplicated
    return -1
}

module.exports = {
    convertStringToColoumnNumber,
    findTheSingleNumber
}