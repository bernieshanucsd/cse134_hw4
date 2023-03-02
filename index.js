export function allButtons() {
	var submit = document.getElementById("submitform");
	submit.addEventListener("click", submitFunc);
}

function submitFunc() {
	var fname = DOMPurify.sanitize(document.getElementById("firstname").value);
	var lname = DOMPurify.sanitize(document.getElementById("lastname").value);
	var email = DOMPurify.sanitize(document.getElementById("email").value);
	var position = DOMPurify.sanitize(document.getElementById("position").value);
	var hearabout = DOMPurify.sanitize(document.getElementById("hearabout").value);
	var message = DOMPurify.sanitize(document.getElementById("message").value);
	window.alert("Your Response:\nFirst Name: " + fname
		+ "\nLast Name: " + lname + "\nEmail: " + email +
		"\nPosition: " + position + "\nHow did you hear about me?: " +
		hearabout + "\nYour Message: " + message);
}
