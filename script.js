
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return undefined;
    }
    return a / b;
}

const state = {
    operator: "",
    first: "",
    second: ""
}


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

const handleNumberClick = (e) => {
    storeNumber(e.target.textContent);
    updateDisplay();
}

const addNumberEvents = () => {
    const numberButtons = document.querySelectorAll("button.number");
    for (const button of numberButtons) {
        button.addEventListener("click", handleNumberClick);
    }
}

const storeNumber = (input) => {
    const currentNumber = getCurrentNumber();
    if (input === "." && state[currentNumber].includes(".")) {
        return;
    }
    state[currentNumber] += input;
}

const updateDisplay = (text) => {
    const resultDisplay = document.querySelector(".result");
    if (text) {
        resultDisplay.textContent = text;
    } else {
        resultDisplay.textContent = state[getCurrentNumber()];
    }
}

const getCurrentNumber = () => {
    if (state.operator) {
        return "second";
    }
    return "first";
}

addNumberEvents();