var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMultiply = document.getElementById('buttonMultiply')
var buttonDivided = document.getElementById('buttonDivided')

function onButtonPlusClick(params) {
    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    var result = number1 + number2
    console.log(result)
}
function onButtonMinusClick(params) {
    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    var result = number1 - number2
    console.log(result)
}
function onButtonMultiplyClick(params) {
    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    var result = number1 * number2
    console.log(result)
}
function onButtonDividedClick(params) {
    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    var result = number1 / number2
    console.log(result)
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivided.addEventListener('click', onButtonDividedClick)

// https://youtu.be/8DRvw6qSfE4