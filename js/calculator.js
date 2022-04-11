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
        result = calculator(firstNumber, parseInt(display.innerHTML), operator);
        display.innerHTML = Math.floor(result);
        operator = null;
        isCalculing = false;
    },
    "Escape": function () {
        clear();
    },
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
        firstNumber = parseInt(display.innerHTML);
        display.innerHTML = currentButton;
        operatorSelected = false;
        isCalculing = true;
        oldOperator = operator;
    } else if (display.innerHTML == 0) {
        display.innerHTML = currentButton;
    } else {
        display.innerHTML = display.innerHTML + currentButton;
    }

}

export function calculation(key, value) {
    calc[key](value);
    if (isCalculing && (key == "NumpadSubtract" || key == "NumpadAdd" || key == "NumpadMultiply" || key == "NumpadDivide")) {
        result = calculator(firstNumber, parseInt(display.innerHTML), oldOperator);
        display.innerHTML = Math.floor(result);
        isCalculing = false;
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