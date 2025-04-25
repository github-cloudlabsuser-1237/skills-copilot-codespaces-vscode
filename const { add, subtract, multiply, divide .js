const { add, subtract, multiply, divide } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js
jest.mock('prompt-sync', () => {
    return jest.fn(() => jest.fn());
});

describe('calculator', () => {
    let promptMock;

    beforeEach(() => {
        promptMock = require('prompt-sync')();
    });

    test('performs addition correctly', () => {
        promptMock
            .mockReturnValueOnce('1') // Select addition
            .mockReturnValueOnce('5') // First number
            .mockReturnValueOnce('3') // Second number
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn(); // Mock console.log

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Result: 8');
    });

    test('performs subtraction correctly', () => {
        promptMock
            .mockReturnValueOnce('2') // Select subtraction
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Result: 6');
    });

    test('performs multiplication correctly', () => {
        promptMock
            .mockReturnValueOnce('3') // Select multiplication
            .mockReturnValueOnce('6') // First number
            .mockReturnValueOnce('7') // Second number
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Result: 42');
    });

    test('performs division correctly', () => {
        promptMock
            .mockReturnValueOnce('4') // Select division
            .mockReturnValueOnce('8') // First number
            .mockReturnValueOnce('2') // Second number
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Result: 4');
    });

    test('handles division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Select division
            .mockReturnValueOnce('8') // First number
            .mockReturnValueOnce('0') // Second number
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Result: Error! Division by zero.');
    });

    test('handles invalid choice', () => {
        promptMock
            .mockReturnValueOnce('6') // Invalid choice
            .mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Invalid choice. Please try again.');
    });

    test('quits the calculator', () => {
        promptMock.mockReturnValueOnce('5'); // Quit

        console.log = jest.fn();

        require('./test').calculator();

        expect(console.log).toHaveBeenCalledWith('Thanks for using the calculator. Goodbye!');
    });
});const { add, subtract, multiply, divide } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

// Test suite for the add function
describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
        expect(add(-4, -6)).toBe(-10);
    });

    test('adds zero to a number', () => {
        expect(add(7, 0)).toBe(7);
    });
});

// Test suite for the subtract function
describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts a larger number from a smaller number', () => {
        expect(subtract(3, 7)).toBe(-4);
    });

    test('subtracts zero from a number', () => {
        expect(subtract(8, 0)).toBe(8);
    });

    test('subtracts a number from itself', () => {
        expect(subtract(5, 5)).toBe(0);
    });
});

// Test suite for the multiply function
describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiply(6, -2)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
        expect(multiply(-3, -5)).toBe(15);
    });

    test('multiplies a number by zero', () => {
        expect(multiply(7, 0)).toBe(0);
    });
});

// Test suite for the divide function
describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(8, 2)).toBe(4);
    });

    test('divides a positive number by a negative number', () => {
        expect(divide(9, -3)).toBe(-3);
    });

    test('divides two negative numbers', () => {
        expect(divide(-12, -4)).toBe(3);
    });

    test('returns an error message when dividing by zero', () => {
        expect(divide(5, 0)).toBe("Error! Division by zero.");
    });
});const { add, subtract, multiply, divide } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

// Test suite for the add function
describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
        expect(add(-4, -6)).toBe(-10);
    });

    test('adds zero to a number', () => {
        expect(add(7, 0)).toBe(7);
    });
});

// Test suite for the subtract function
describe('subtract', () => {
    test('subtracts two positive numbers', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts a larger number from a smaller number', () => {
        expect(subtract(3, 7)).toBe(-4);
    });

    test('subtracts zero from a number', () => {
        expect(subtract(8, 0)).toBe(8);
    });

    test('subtracts a number from itself', () => {
        expect(subtract(5, 5)).toBe(0);
    });
});

// Test suite for the multiply function
describe('multiply', () => {
    test('multiplies two positive numbers', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiply(6, -2)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
        expect(multiply(-3, -5)).toBe(15);
    });

    test('multiplies a number by zero', () => {
        expect(multiply(7, 0)).toBe(0);
    });
});

// Test suite for the divide function
describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(8, 2)).toBe(4);
    });

    test('divides a positive number by a negative number', () => {
        expect(divide(9, -3)).toBe(-3);
    });

    test('divides two negative numbers', () => {
        expect(divide(-12, -4)).toBe(3);
    });

    test('returns an error message when dividing by zero', () => {
        expect(divide(5, 0)).toBe("Error! Division by zero.");
    });
});