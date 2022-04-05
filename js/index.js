import {
    buttonAnimation,
    calculation,
} from './calculator.js'

const numberOfButtons = document.querySelectorAll(".calc__button");

// Detecting Buttons Clicks

numberOfButtons.forEach(element => {
    element.addEventListener("click", function () {

        let buttonValue = this.value;

        console.log(buttonValue)

        buttonAnimation(buttonValue);

        calculation(buttonValue);

    });
});

// Detecting Keyboard Presses

document.addEventListener("keydown", function (event) {

    console.log(event.code);

    buttonAnimation(event.code);

    calculation(event.code);

});