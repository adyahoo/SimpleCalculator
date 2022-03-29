const numbers = document.querySelectorAll('.number')
const screen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')

let prevNumber = '0'
let currentNumber = '0'
let currentOperator = ''

const updateScreen = (number) => {
    screen.value = number
}

const inputNumber = (number) => {
    if (currentNumber == '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if (currentOperator == '') {
        prevNumber = currentNumber
    }
    currentOperator = operator
    currentNumber = ''
}

const calculate = () => {
    let result = ''
    switch (currentOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '%':
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    currentOperator = ''
}

const clearNumber = () => {
    prevNumber = ''
    currentNumber = '0'
    currentOperator = ''
}

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        inputOperator(e.target.value)
    })
})

equal.addEventListener('click', (e) => {
    calculate()
    updateScreen(currentNumber)
})

clear.addEventListener('click', (e) => {
    clearNumber()
    updateScreen(currentNumber)
})

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})