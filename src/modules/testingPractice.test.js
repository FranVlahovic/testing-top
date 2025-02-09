const {
    capitalize,
    reverseString,
    calculator,
    analyzeArray,
} = require('./testingPractice');

// Capitalize
test('Capitalize first char', () => {
    expect(capitalize('fran')).toMatch('Fran');
});

// Reverse
test('Take string and reverse it', () => {
    expect(reverseString('fran')).toMatch('narf');
});

// Calculator
test('Adding numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('Subtracting numbers', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
});

test('Dividing numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('Multiplying numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

// Analyze Array
test('Analyzing Array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
