const { isWeekend } = require('./13.exercises')

test("is the date a weekend?", () => {
    expect(isWeekend()).toBe('invalid input')
    expect(isWeekend(123)).toBe('invalid input')

    expect(isWeekend('2021-01-01')).toBe(false)
    expect(isWeekend('2021-01-02')).toBe(true)
    expect(isWeekend('2021-01-03')).toBe(true)
    expect(isWeekend('2021-01-04')).toBe(false)

    expect(isWeekend('2021-13-05')).toBe('invalid input')
    expect(isWeekend('2021-01-32')).toBe('invalid input')
});