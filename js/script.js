const container = document.getElementById("container");
const buttonEnter = document.getElementById("enter");
const buttonDelete = document.getElementById("delete");
const input = document.getElementById("userinput");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const div = document.createElement("div");
	
	const p = document.createElement("p");
	p.appendChild(document.createTextNode(input.value));
	div.appendChild(p);

	const buttonDelete = setupDeleteButton();
	div.appendChild(buttonDelete);

	container.appendChild(div);

	p.addEventListener("click", toggleDoneWhenMouseClick);
	buttonDelete.addEventListener("click", deleteListAfterButtonClick);

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
	const button = document.createElement("button");
	button.id = "delete";
	button.innerHTML = "Delete";

	return button
}

function deleteListAfterButtonClick(event) {
	const li = event.target.parentElement
	li.parentElement.removeChild(li)
}

function toggleDoneWhenMouseClick(event) {
	event.target.classList.toggle("done");
}

buttonEnter.addEventListener("click", addListAfterButtonClick);
input.addEventListener("keypress", addListAfterKeypress);