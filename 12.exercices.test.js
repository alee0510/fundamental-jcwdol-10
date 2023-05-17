// import function yang akan di test
const { convertStringToColoumnNumber, findTheSingleNumber } = require('./12.exercices')

// test case
describe("create test or spec for 12th exercices", () => {
    test("convert string to column number of excel", () => {
        expect(convertStringToColoumnNumber()).toBe('Invalid input')
        expect(convertStringToColoumnNumber(123)).toBe('Invalid input')
    
        // input lowercase
        expect(convertStringToColoumnNumber('a')).toBe(1)
        expect(convertStringToColoumnNumber('z')).toBe(26)
        expect(convertStringToColoumnNumber('aa')).toBe(27)
        expect(convertStringToColoumnNumber('az')).toBe(52)

        // input uppercase
        expect(convertStringToColoumnNumber('A')).toBe(1)
        expect(convertStringToColoumnNumber('Z')).toBe(26)
        expect(convertStringToColoumnNumber('AA')).toBe(27)
        expect(convertStringToColoumnNumber('AZ')).toBe(52)
    })
    
    test("find the single number", () => {
        expect(findTheSingleNumber()).toBe('Invalid input')
        expect(findTheSingleNumber(123)).toBe('Invalid input')
        expect(findTheSingleNumber([])).toBe(-1)
        expect(findTheSingleNumber([1])).toBe(1)
        expect(findTheSingleNumber([1, 1])).toBe(-1)
        expect(findTheSingleNumber([1, 2, 2])).toBe(1)
        expect(findTheSingleNumber([1, 2, 2, 3, 3, 4, 4])).toBe(1)
        expect(findTheSingleNumber([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7])).toBe(1)
    })
})