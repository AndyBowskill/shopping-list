const container = document.getElementById("container");
const buttonEnter = document.getElementById("enter");
const buttonDelete = document.getElementById("delete");
const input = document.getElementById("userinput");

const inputLength = () => input.value.length;

const createListElement = () => {
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

const addListAfterButtonClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

const setupDeleteButton = () => {
	const button = document.createElement("button");
	button.id = "delete";
	button.innerHTML = "Delete";
	return button;
}

const deleteListAfterButtonClick = (event) => {
	const li = event.target.parentElement;
	li.parentElement.removeChild(li);
}

const toggleDoneWhenMouseClick = (event) => event.target.classList.toggle("done");

buttonEnter.addEventListener("click", addListAfterButtonClick);
input.addEventListener("keypress", addListAfterKeypress);