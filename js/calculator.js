import {
    add,
    subtract,
    multiply,
    divide,
    calculator
} from './operators.js';


let operator = null;
let oldOperator = null;
let firstNumber = 0;
let result = 0;
let operatorSelected = false;
let isCalculing = false;

const display = document.querySelector(".display__numbers");
const calc = {
    "Numpad0": x => addToDisplay(x),
    "Numpad1": x => addToDisplay(x),
    "Numpad2": x => addToDisplay(x),
    "Numpad3": x => addToDisplay(x),
    "Numpad4": x => addToDisplay(x),
    "Numpad5": x => addToDisplay(x),
    "Numpad6": x => addToDisplay(x),
    "Numpad7": x => addToDisplay(x),
    "Numpad8": x => addToDisplay(x),
    "Numpad9": x => addToDisplay(x),
    "NumpadDecimal": x => addToDisplay(x),
    "NumpadAdd": function () {
        operatorSelected = true, operator = add;
    },
    "NumpadSubtract": function () {
        operatorSelected = true, operator = subtract;
    },
    "NumpadMultiply": function () {
        operatorSelected = true, operator = multiply;
    },
    "NumpadDivide": function () {
        operatorSelected = true, operator = divide;
    },
    "NumpadEnter": function () {
        printResult();
        operator = null;
    },
    "Escape": function () {
        clear();
    },
    "Backspace": function () {
        backspace();
    }
}


export function buttonAnimation(currentButton) {

    let activeButton = document.querySelector("." + currentButton);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}


export function addToDisplay(currentButton) {
    if (operatorSelected) {
        firstNumber = parseFloat(display.innerHTML);
        display.innerHTML = currentButton;
        operatorSelected = false;
        isCalculing = true;
        oldOperator = operator;
    } else if (display.innerHTML === '0' && currentButton !== '.') {
        display.innerHTML = currentButton;
    } else if (currentButton == "." && display.innerHTML.includes('.')) {
        return;
    } else {
        display.innerHTML = display.innerHTML + currentButton;
    }
}

export function calculation(key, value) {
    calc[key](value);
    if (isCalculing && (key == "NumpadSubtract" || key == "NumpadAdd" || key == "NumpadMultiply" || key == "NumpadDivide")) {
        printResult();
    }
}

export function clear() {
    display.innerHTML = null;
    operator = null;
    oldOperator = null;
    operatorSelected = false;
    result = 0;
    isCalculing = false;
}

export function backspace() {
    let currentDisplay = display.innerHTML;
    let editedDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    display.innerHTML = editedDisplay
}

export function printResult() {
    result = calculator(firstNumber, parseFloat(display.innerHTML), oldOperator);
    let resultAsStr = result.toString();
    if (resultAsStr.includes('.')) {
        display.innerHTML = result.toFixed(2);
    } else {
        display.innerHTML = result;
    }
    isCalculing = false;
}