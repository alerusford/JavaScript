function addErrorClass(elementId) {
    var element = document.getElementById(elementId)
    element.className = 'error-input'
}

function addErrorClassToAllInputs(params) {
    addErrorClass('first-name')
    addErrorClass('last-name')
    addErrorClass('address')
}

// addErrorClass('last-name')
// window.setTimeout(addErrorClassToAllInputs, 4000)


var sendButton = document.getElementById('send_button')
// sendButton.addEventListener('click', addErrorClassToAllInputs)

sendButton.addEventListener('click', addErrorClassToLastName)

function addErrorClassToLastName(params) {
    addErrorClass('last-name')
}

function onFirstNameKeyup(params) {
    addErrorClass('first-name')
}
var firstNameEl = document.getElementById('first-name')
firstNameEl.addEventListener('keyup', onFirstNameKeyup)