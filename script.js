// basic math operators

function addition (a,b) {
    return a + b;
}

function subtraction (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

// operator convertor

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
}

function operate (operator, a, b) {
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return addition(a,b)
        case '-':
            return subtraction(a,b)
        case '×':
            return multiply(a,b)
        case '÷':
            return divide(a,b)
        default:
            return null
    }
}