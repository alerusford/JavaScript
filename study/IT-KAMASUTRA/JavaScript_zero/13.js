function logValue(id) {
    var el = document.getElementById(id)
    console.log(el.value)
}

function getValue(id) {
    var el = document.getElementById(id)
    return el.value
}

function getEl(id) {
    
    
}


var firstNameId = 'first-name'
var lastNameId = 'last-name'

logValue(firstNameId)
logValue(lastNameId)

var value = getValue(firstNameId)
console.log(value)