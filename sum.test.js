// import unit yang mau di test
const Sum = require("./sum")

// create test scenario
test("adds 1 + 2 to equal 3", () => {
    expect(Sum(1, 2)).toBe(3) // matcher
})

test("adds 0 + 0 equal 0", () => {
    expect(Sum(0, 0)).toBe(0)
})

// common matcher : toBe, toEqual, not.toBe, not.toEqual
test("object assignment", () => {
    const data = { one: 1 }
    data["two"] = 2
    expect(data).toEqual({ one: 1, two: 2 })
})

// truthiness : toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy
test("null", () => {
    const n = null
    expect(n).toBeNull() // pass
    expect(n).toBeDefined() // pass
    expect(n).not.toBeUndefined() // pass
    expect(n).not.toBeTruthy() // if (n) => true
    expect(n).toBeFalsy() // if (n) => false
})

// number : toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
test("number", () => {
    const value = 20
    expect(value).toBeGreaterThan(10) // > 10
    expect(value).toBeGreaterThanOrEqual(20) // >=20
    expect(value).toBeLessThan(21)
    expect(value).toBeLessThanOrEqual(20)
})

// string : toMatch(/regex/)
test("string", () => {
    const value = "hello world"
    expect(value).toMatch(/hello/)
    expect(value).not.toMatch(/foo/)
})

// array : toContain
const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer"
]
test("the shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer")
    expect(new Set(shoppingList)).toContain("beer")
})


// mock function -> callback
// mock function : toHaveBeenCalled, toHaveBeenCalledTimes, toHaveBeenCalledWith
// mock function : mockReturnValue, mockReturnValueOnce
test("mock function", () => {
    const mockFn = jest.fn()
    mockFn()
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
})

test("mock function with return value", () => {
    const mockFn = jest.fn(() => "foo")
    // mockFn.mockReturnValue("foo")
    expect(mockFn()).toBe("foo")
})

test("mock function with return value once", () => {
    const mockFn = jest.fn()
        .mockReturnValueOnce("foo")
        .mockReturnValueOnce("bar")
        .mockReturnValueOnce("baz")
    expect(mockFn()).toBe("foo")
    expect(mockFn()).toBe("bar")
    expect(mockFn()).toBe("baz")
})

// test callback
test("callback", () => {
    const mockFn = jest.fn((a, b) => a + b)
    mockFn(1, 2)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn.mock.calls[0][0]).toBe(1)
    expect(mockFn.mock.calls[0][1]).toBe(2)
    expect(mockFn.mock.results[0].value).toBe(3)
})

// simple -> array inside array
const ArrayOfArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
test("array of array", () => {
    expect(ArrayOfArray).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([1, 2, 3]),
        ])
    )
})