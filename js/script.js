var buttonEnter = document.getElementById("enter");
var buttonDelete = document.getElementById("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " | "));
	li.addEventListener("click", toggleDoneWhenMouseClick);

	var buttonDelete = setupDeleteButton();
	li.appendChild(buttonDelete);
	buttonDelete.addEventListener("click", deleteListAfterButtonClick);

	ul.appendChild(li);

	input.value = "";
}

function addListAfterButtonClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function setupDeleteButton() {
	let button = document.createElement("button");
	button.id = "delete";
	button.innerHTML = "Delete";

	return button
}

function deleteListAfterButtonClick(event) {
	var li = event.target.parentElement
	li.parentElement.removeChild(li)
}

function toggleDoneWhenMouseClick(event) {
	event.target.classList.toggle("done");
}

buttonEnter.addEventListener("click", addListAfterButtonClick);

input.addEventListener("keypress", addListAfterKeypress);