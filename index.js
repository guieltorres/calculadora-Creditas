function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// Detectin Buttons

let numberOfButtons = document.querySelectorAll(".calc__button").length;

for (let i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".calc__button")[i].addEventListener("click", function (event) {

        let buttonValue = this.value;
        console.log(event);

        buttonAnimation(buttonValue);

    });

}

// Detecting Keyboard Presses

document.addEventListener("keydown", function (event) {

    console.log(event.code)

    buttonAnimation(event.code)
})

function buttonAnimation(currentButton) {

    let activeButton = document.querySelector("." + currentButton);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200)
}