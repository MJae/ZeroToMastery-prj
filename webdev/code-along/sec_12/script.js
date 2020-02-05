var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

function addToListClick() {
  if (inputlength() > 0) {
    createListElement();   
  }
}

function addToListEnter() {
  if (inputlength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addToListClick);
input.addEventListener("keypress", addToListEnter);