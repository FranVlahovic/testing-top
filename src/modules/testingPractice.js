function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function reverseString(value) {
    return value.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    },
};

function analyzeArray(valueArray) {
    let sum = 0;

    function averageValue() {
        for (let i = 0; i < valueArray.length; i += 1) {
            sum += valueArray[i];
        }
        return sum / valueArray.length;
    }

    const valueObject = {
        average: averageValue(),
        min: Math.min(...valueArray),
        max: Math.max(...valueArray),
        length: valueArray.length,
    };

    return valueObject;
}

module.exports = { capitalize, reverseString, calculator, analyzeArray };
