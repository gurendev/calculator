
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

const handleOperatorClick = (e) => {
    if (state.second) {
        const equalsButton = document.querySelector("button.equals");
        equalsButton.click();
    } else {
        updateDisplay(e.target.textContent);
    }
    state["operator"] = e.target.id;
}

const calculateResult = () => {
    const firstNumber = Number(state.first);
    const secondNumber = Number(state.second);
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return undefined;
    }
    const result = operate(state.operator, firstNumber, secondNumber);
    return result;
}

const addEqualsEvent = () => {
    const equalsButton = document.querySelector("button.equals");
    equalsButton.addEventListener("click", handleEqualsClick);
}

const handleEqualsClick = (e) => {
    console.log(state);
    if (!state.operator || !state.second) {
        return;
    }
    const result = calculateResult();
    resetState();
    if (result) {
        updateDisplay(result);
        state.first = String(result);
    } else {
        updateDisplay("ERROR");
    }
}

const resetState = () => {
    state.first = "";
    state.second = "";
    state.operator = "";
}

const addOperatorEvents = () => {
    const operatorButtons = document.querySelectorAll("button.operator");
    for (const button of operatorButtons) {
        button.addEventListener("click", handleOperatorClick);
    }
}

addNumberEvents();
addOperatorEvents();
addEqualsEvent();