const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let displayValue = '';
let currentValue = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            displayValue = '';
            currentValue = '';
            operator = '';
            display.innerText = '0';
        } else if (value === 'DEL') {
            displayValue = displayValue.slice(0, -1);
            display.innerText = displayValue || '0';
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentValue) {
                calculate();
            }
            operator = value;
            currentValue = displayValue;
            displayValue = '';
        } else if (value === '=') {
            if (operator && currentValue) {
                calculate();
                operator = '';
            }
        } else {
            displayValue += value;
            display.innerText = displayValue;
        }
    });
});

function calculate() {
    const result = eval(`${currentValue} ${operator} ${displayValue}`);
    display.innerText = result;
    displayValue = result.toString();
    currentValue = '';
}
