var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// If you click on the list item, it toggles the .done  class on and off.
var listItems = document.querySelectorAll("li");

function listItemDone() {
	if (this.classList.contains("done")) {
		this.classList.remove("done");
	} else {
		this.classList.add("done");
	}
}

listItems.forEach(function(item){
	item.addEventListener("click", listItemDone)
})

// Add buttons next to each list item to delete the item
// when clicked on its corresponding delete button.
function removeListItem() {
	var toRemove = document.getElementById(this.id);
	ul.removeChild(toRemove);
}

function setListItemID() {
	listItems.forEach(function(item) {
		item.setAttribute("id", item.innerText);
	})
}

function addDeleteButton() {
	listItems.forEach(function(item) {
		var deleteButton = document.createElement("input");
		deleteButton.setAttribute("type", "button");
		deleteButton.setAttribute("value", "x");
		deleteButton.addEventListener("click", removeListItem);
		item.appendChild(deleteButton);
	})
}

window.addEventListener("load", addDeleteButton);
window.addEventListener("load", setListItemID);