const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentInput += number.value;
        updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (currentInput !== '') {
            if (previousInput !== '') {
                calculate();
            } else {
                previousInput = currentInput;
            }
            currentOperator = operator.value;
            currentInput = '';
            updateDisplay();
        }
    });
});

clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

calculateButton.addEventListener('click', () => {
    calculate();
    updateDisplay();
});

function clear() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
}

function calculate() {
    if (currentInput !== '' && previousInput !== '') {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        previousInput = '';
        currentOperator = '';
    }
}

function updateDisplay() {
    display.textContent = currentInput === '' ? '0' : currentInput;
}
