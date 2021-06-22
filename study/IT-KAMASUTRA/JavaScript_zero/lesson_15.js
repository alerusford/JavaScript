var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMultiply = document.getElementById('buttonMultiply')
var buttonDivide = document.getElementById('buttonDivide')

var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function makeOperation(operationCode) {

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-'){
        var result = number1 - number2;
    } else if (operationCode === '*'){
        var result = number1 * number2;
    } else if (operationCode === '/'){
        var result = number1 / number2;
    } else {
        window.alert('Operation is not found')
    }
    window.alert(result)
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];

for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
    
}