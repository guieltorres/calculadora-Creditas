import {
    add,
    subtract,
    multiply,
    divide,
    calculator
} from './operators.js';


let operator = [];
let firstNumber = [];
let result = 0;
let operatorSelected = false;
const display = document.querySelector(".display__numbers");


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
    } else if (display.innerHTML == 0) {
        display.innerHTML = currentButton;
    } else {
        display.innerHTML = display.innerHTML + currentButton;
    }
    // console.log(currentButton)

}

export function calculation(key) {

    // console.log(key)

    switch (key) {
        case 'Numpad0':
            addToDisplay(0);
            break;
        case 'Numpad1':
            addToDisplay(1);
            break;
        case 'Numpad2':
            addToDisplay(2);
            break;
        case 'Numpad3':
            addToDisplay(3);
            break;
        case 'Numpad4':
            addToDisplay(4);
            break;
        case 'Numpad5':
            addToDisplay(5);
            break;
        case 'Numpad6':
            addToDisplay(6);
            break;
        case 'Numpad7':
            addToDisplay(7);
            break;
        case 'Numpad8':
            addToDisplay(8);
            break;
        case 'Numpad9':
            addToDisplay(9);
            break;
        case 'Escape':
            clear();
            break;
        case 'NumpadAdd':
            operator = add;
            operatorSelected = true;
            break;
        case 'NumpadSubtract':
            operator = subtract;
            operatorSelected = true;
            break;
        case 'NumpadMultiply':
            operator = multiply;
            operatorSelected = true;
            break;
        case 'NumpadDivide':
            operator = divide;
            operatorSelected = true;
            break;
        case 'NumpadEnter':
            result = calculator(firstNumber, parseInt(display.innerHTML), operator);
            display.innerHTML = Math.floor(result);
            operator = null
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

export function clear() {
    display.innerHTML = 0;
    operator = null;
    operatorSelected = false;
    result = 0;
}