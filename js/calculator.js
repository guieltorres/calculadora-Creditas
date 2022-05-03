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

const PRECISION = 2;
const display = document.querySelector(".display__numbers");
const calc = {
    "0": x => addNumberToDisplay(x),
    "1": x => addNumberToDisplay(x),
    "2": x => addNumberToDisplay(x),
    "3": x => addNumberToDisplay(x),
    "4": x => addNumberToDisplay(x),
    "5": x => addNumberToDisplay(x),
    "6": x => addNumberToDisplay(x),
    "7": x => addNumberToDisplay(x),
    "8": x => addNumberToDisplay(x),
    "9": x => addNumberToDisplay(x),
    ".": x => addNumberToDisplay(x),
    ",": x => addNumberToDisplay('.'),
    "+": function () {
        operatorSelected = true, operator = add;
    },
    "-": function () {
        operatorSelected = true, operator = subtract;
    },
    "-": function () {
        operatorSelected = true, operator = subtract;
    },
    "×": function () {
        operatorSelected = true, operator = multiply;
    },
    "*": function () {
        operatorSelected = true, operator = multiply;
    },
    "÷": function () {
        operatorSelected = true, operator = divide;
    },
    "/": function () {
        operatorSelected = true, operator = divide;
    },
    "=": function () {
        printResult();
        operator = null;
    },
    "Enter": function () {
        printResult();
        operator = null;
    },
    "C": function () {
        clear();
    },
    "Escape": function () {
        clear();
    },
    "⌫": function () {
        backspace();
    },
    "Backspace": function () {
        backspace();
    },
}


export function calculation(key) {
    calc[key](key);
    if (isCalculing && (key == "+" || key == "-" || key == "×" || key == "÷" || key == "/" || key == "*")) {
        printResult();
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
    firstNumber = display.innerHTML;
}

export function printResult() {
    result = calculator(firstNumber, parseFloat(display.innerHTML), oldOperator);
    let resultAsStr = result.toString();
    if (resultAsStr.includes('.')) {
        display.innerHTML = limitStrLenght(result.toFixed(PRECISION).toString(), 9);
    } else {
        display.innerHTML = limitStrLenght(result.toString(), 9);
    }
    isCalculing = false;
}

function limitStrLenght(string, limit) {
    return string.substring(0, limit)
}