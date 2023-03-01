/* This function is called when the alert button is pressed. 
It makes a copy of the alert template and appends it to the body. */
function alertFunc() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
	var alert = document.getElementById("alerttemplate");
	var clone = alert.content.cloneNode(true);
	document.body.appendChild(clone);
}

/* This function is called when the confirm button is pressed. 
It makes a copy of the confirm template and appends it to the body. */
function confirmFunc() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
	var confirm = document.getElementById("confirmtemplate");
	var clone = confirm.content.cloneNode(true);
	document.body.appendChild(clone);
}

/* This function is called when the prompt button is pressed. 
It makes a copy of the prompt template and appends it to the body. */
function promptFunc() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "block";
	var prompt = document.getElementById("prompttemplate");
	var clone = prompt.content.cloneNode(true);
	document.body.appendChild(clone);
}

/* This function simply adds event listeners for "clicks" to all of the buttons */
export function allButtons() {
	var alert = document.getElementById("alert");
	alert.addEventListener("click", alertFunc);

	var confirm = document.getElementById("confirm");
	confirm.addEventListener("click", confirmFunc);

	var prompt = document.getElementById("prompt");
	prompt.addEventListener("click", promptFunc);
}

/* This function removes the alert dialog once the Ok button is clicked */
export function removeAlert() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var temp = document.getElementById("alertdialog");
	if (temp != null)
		document.body.removeChild(temp);	
}

/* This function removes the confirm dialog once the Ok button is clicked */
export function removeConfirmOk() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var confirm = document.getElementById("result");
	var temp = document.getElementById("confirmdialog");
	if (temp != null)
		document.body.removeChild(temp);	
	confirm.innerHTML = "The value returned by the confirm method is : true";
}

/* This function removes the confirm dialog once the Cancel button is clicked */
export function removeConfirmCancel() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var confirm = document.getElementById("result");
	var temp = document.getElementById("confirmdialog");
	if (temp != null)
		document.body.removeChild(temp);	
	confirm.innerHTML = "The value returned by the confirm method is : false";
}

/* This function removes the prompt dialog once the Ok button is clicked */
export function removePromptOk() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var prompt = document.getElementById("result");
	var temp = document.getElementById("promptdialog");
	var answer = document.getElementById("promptname").value;
	answer = DOMPurify.sanitize(answer);
	if (temp != null)
		document.body.removeChild(temp);
	if (answer == "") {
		prompt.innerHTML = "The value returned by the prompt method is : User didn't enter anything"
	}
	else {	
		prompt.innerHTML = "The value returned by the prompt method is : " + answer;
	}
}

/* This function removes the prompt dialog once the cancel button is clicked */
export function removePromptCancel() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
	var prompt = document.getElementById("result");
	var temp = document.getElementById("promptdialog");
	if (temp != null)
		document.body.removeChild(temp);	
	prompt.innerHTML = "The value returned by the prompt method is : User didn't enter anything";
}