// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Helper to get input values and display results
function calculate(operationFunc) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operationFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}

// Add event listeners to buttons
document.getElementById('add').addEventListener('click', () => calculate(add));
document.getElementById('subtract').addEventListener('click', () => calculate(subtract));
document.getElementById('multiply').addEventListener('click', () => calculate(multiply));
document.getElementById('divide').addEventListener('click', () => calculate(divide));
