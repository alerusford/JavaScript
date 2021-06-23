var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMultiply = document.getElementById('buttonMultiply')
var buttonDivided = document.getElementById('buttonDivided')

var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function makeOperation(operationCode) {
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    
    if (operationCode === '+') {
        var result = number1 + number2
    } else if (operationCode === '-') {
        var result = number1 - number2
    } else if (operationCode === '*') {
        var result = number1 * number2
    } else if (operationCode === '/') {
        var result = number1 / number2
    }
    console.log(result)
    }

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget
    var operation = clickedElement.innerHTML
    makeOperation(operation)
}

buttonPlus.addEventListener('click', onOperationButtonClick)
buttonMinus.addEventListener('click', onOperationButtonClick)
buttonMultiply.addEventListener('click', onOperationButtonClick)
buttonDivided.addEventListener('click', onOperationButtonClick)

// https://youtu.be/8DRvw6qSfE4