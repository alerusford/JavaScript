var firstNameEl = document.getElementById("first-name");
var lastNameEl = document.getElementById('last-name');
alertValues(firstNameEl)
var address = document.getElementById("address");
var citiesEl = document.getElementById('cities');
var hobbiesEl = document.getElementById('hobbies');
var avatarEl = document.getElementById("avatar");


// firstNameEl.value = 'andrey';
// firstNameEl.className = 'error-input'

// avatarEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>'

// var listId = 'list'
// var numberList = document.getElementById(listId)
// // window.alert(numberList.innerHTML)

function alertValues(EP) {
    console.log(EP.value)
    console.log(EP.className)
}  



// alertValues();