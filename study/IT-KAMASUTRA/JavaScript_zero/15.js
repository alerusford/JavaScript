var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    }
    console.log(result);
    }

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = document.getElementsByClassName ('operation_button');

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);   
}
// https://youtu.be/6jmwkoRXHIk?t=3