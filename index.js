const display = document.getElementById("display");
let lastActionWasEvaluate = false;

function appendToDisplay(input) {
    if (lastActionWasEvaluate) {
        display.value = "";
        lastActionWasEvaluate = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastElement() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    display.value = math.evaluate(display.value);
    lastActionWasEvaluate = true;
}