var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMultiply = document.getElementById('buttonMultiply')
var buttonDivided = document.getElementById('buttonDivided')

var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function getNumber1(params) {
    return Number(input1.value)
}
function getNumber2(params) {
    return Number(input2.value)
}

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2()
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2()
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2()
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2()
    }
    console.log(result)
    }


function onButtonPlusClick(params) {
    makeOperation('+')
}
function onButtonMinusClick(params) {
    makeOperation('-')
}
function onButtonMultiplyClick(params) {
    makeOperation('*')
}
function onButtonDividedClick(params) {
    makeOperation('/')
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivided.addEventListener('click', onButtonDividedClick)

// https://youtu.be/8DRvw6qSfE4