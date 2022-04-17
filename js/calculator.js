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
    "Numpad0": x => addNumberToDisplay(x),
    "Numpad1": x => addNumberToDisplay(x),
    "Numpad2": x => addNumberToDisplay(x),
    "Numpad3": x => addNumberToDisplay(x),
    "Numpad4": x => addNumberToDisplay(x),
    "Numpad5": x => addNumberToDisplay(x),
    "Numpad6": x => addNumberToDisplay(x),
    "Numpad7": x => addNumberToDisplay(x),
    "Numpad8": x => addNumberToDisplay(x),
    "Numpad9": x => addNumberToDisplay(x),
    "NumpadComma": x => addNumberToDisplay(x),
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

export function addNumberToDisplay(currentButton) {
    if (operatorSelected) {
        if (display.innerHTML !== "") firstNumber = parseFloat(display.innerHTML);
        display.innerHTML = currentButton;
        operatorSelected = false;
        isCalculing = true;
        oldOperator = operator;
    } else if (display.innerHTML === '0' && currentButton !== '.') {
        display.innerHTML = currentButton;
    } else if (currentButton == "." && display.innerHTML.includes('.')) {
        return;
    } else {
        if (display.innerHTML.length < 9) display.innerHTML = display.innerHTML + currentButton;
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
    firstNumber = 0;
}

export function backspace() {
    let currentDisplay = display.innerHTML;
    let editedDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    display.innerHTML = editedDisplay;
}

export function printResult() {
    result = calculator(firstNumber, parseFloat(display.innerHTML), oldOperator);
    let resultAsStr = result.toString();
    if (resultAsStr.includes('.')) {
        display.innerHTML = limit(result.toFixed(2).toString(), 9);
    } else {
        display.innerHTML = limit(result.toString(), 9);
    }
    isCalculing = false;
}

function limit(string, limit) {
    return string.substring(0, limit)
}