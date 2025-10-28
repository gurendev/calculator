
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return undefined;
    }
    return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

const operate = (op, first, second) => {
    switch (op) {
        case "add":
            return add(first, second);
        case "sub":
            return subtract(first, second);
        case "mult":
            return multiply(first, second);
        case "div":
            return divide(first, second);
        default:
            return undefined;
    }
}