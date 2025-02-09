const sum = require('./sum');

// Exact Equality
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Checks every field of an object or array
test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// Opposite of a Matcher
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a += 1) {
        for (let b = 0; b < 10; b += 1) {
            expect(a + b).not.toBe(0);
        }
    }
});

// Truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// Numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// Floating Point Equality
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});

// Strings
test('there is no I in team', () => {
    expect('team').not.toMatch(/i/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// Arrays and Iterables
const shoppingList = [
    'diapers',
    'kleenex',
    'thrash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// Exception
function compileCode() {
    throw new Error('you are using the wrong JDK!');
}

test('compiling goes as expected', () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error);

    expect(() => compileCode()).toThrow('you are using the wrong JDK');
    expect(() => compileCode()).toThrow(/JDK/);
});
