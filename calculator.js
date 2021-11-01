const displayElement = document.getElementById('display');
let previousNumber;
let currentSymbol;
let shouldClearDisplay = false;

function setDisplay(value) {
    displayElement.innerText = value;
}

function getDisplay() {
    return displayElement.innerText;
}

function isNum(val){
    return !isNaN(val)
}

function handleNumber(valueFromClick) {
    if (shouldClearDisplay === true) {
        setDisplay(valueFromClick);
        shouldClearDisplay = false;
    } else {   
        if (getDisplay() === '0') {
            setDisplay(valueFromClick);
        } else {
            const newValue = getDisplay() + valueFromClick;
            setDisplay(newValue);
        }
    }
}

function handleSymbol(valueFromClick) {
    if (valueFromClick === "+") {
        previousNumber = getDisplay();
        currentSymbol = valueFromClick;
        shouldClearDisplay = true;
    } else if (valueFromClick === "=") {
        const currentValue = getDisplay();
        const result = parseInt(currentValue) + parseInt(previousNumber);
        setDisplay(result);
    }
}

// add click handlers to buttons
const elements = document.getElementsByClassName("button");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        const valueFromClick = event.target.innerText;
        // if it's a number handle this number
        if (isNum(valueFromClick)) {
            handleNumber(valueFromClick)
        } else {
            handleSymbol(valueFromClick)
        }
    });
}
