export function allButtons() {
	var submit = document.getElementById("submitform");
	submit.addEventListener("click", submitFunc);
}

function submitFunc() {
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var position = document.getElementById("position").value;
	var hearabout = document.getElementById("hearabout").value;
	var message = document.getElementById("message").value;
	window.alert("Your Response:\nFirst Name: " + fname
		+ "\nLast Name: " + lname + "\nEmail: " + email +
		"\nPosition: " + position + "\nHow did you hear about me?: " +
		hearabout + "\nYour Message: " + message);
}
