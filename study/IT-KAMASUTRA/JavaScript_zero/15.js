var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMultiply = document.getElementById('buttonMultiply')
var buttonDivided = document.getElementById('buttonDivided')

function onButtonPlusClick(params) {
    console.log('onButtonPlusClick')
}
function onButtonMinusClick(params) {
    console.log('onButtonMinusClick')
}
function onButtonMultiplyClick(params) {
    console.log('onButtonMultiplyClick')
}
function onButtonDividedClick(params) {
    console.log('onButtonDividedClick')
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivided.addEventListener('click', onButtonDividedClick)

//https://youtu.be/Ga-9DcY1SNk?t=1845