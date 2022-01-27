const fb = require('../fizzbuzz');

// Constants
// Challenge 1
test('Sanity check', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('Sanity check', () => {
    expect(fb.BUZZ).toBe('buzz')
})

test('Sanity check', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

// Challenge 2
test('Sanity check', () => {
    expect(fb.isFizzy(3)).toBe(true)
})

// Challenge 3
test('Sanity check', () => {
    expect(fb.isBuzzy(5)).toBe(true)
})

// Challenge 4
test('Sanity check', () => {
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
})
test('Sanity check', () => {
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
})
test('Sanity check', () => {
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

// Challenge 4
test('Sanity check', () => {
    expect(fb.fizzBuzz(15)).toEqual({count: 15, fizz: 4, buzz: 2, fizzBuzz: 1})
})

