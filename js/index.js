import {
    buttonAnimation,
    calculation,
} from './calculator.js'

const numberOfButtons = document.querySelectorAll(".calc__button");

// Detecting Buttons Clicks


numberOfButtons.forEach(element => {
    element.addEventListener("click", function () {

        let buttonValue = this.value;

        let buttonInnerHTML = this.innerHTML;

        // console.log(buttonValue, buttonInnerHTML)

        buttonAnimation(buttonValue);

        calculation(buttonValue, buttonInnerHTML);

        this.blur();
    });
});

// Detecting Keyboard Presses

document.addEventListener("keydown", function (event) {

    console.log(event.code, event.key);

    buttonAnimation(event.code);

    calculation(event.code, event.key);

    event.preventDefault();
});