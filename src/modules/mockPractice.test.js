const forEach = require('./mockPractice');

const mockCallback = jest.fn((x) => 42 + x);

test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});

// // The function was called exactly once
// expect(someMockFunction.mock.calls).toHaveLength(1);

// // The first arg of the first call to the function was 'first arg'
// expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// // The second arg of the first call to the function was 'second arg'
// expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// // The return value of the first call to the function was 'return value'
// expect(someMockFunction.mock.results[0].value).toBe('return value');

// // The function was called with a certain `this` context: the `element` object.
// expect(someMockFunction.mock.contexts[0]).toBe(element);

// // This function was instantiated exactly twice
// expect(someMockFunction.mock.instances.length).toBe(2);

// // The object returned by the first instantiation of this function
// // had a `name` property whose value was set to 'test'
// expect(someMockFunction.mock.instances[0].name).toBe('test');

// // The first argument of the last call to the function was 'test'
// expect(someMockFunction.mock.lastCall[0]).toBe('test');
