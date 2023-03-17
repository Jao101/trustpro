// Get the input values from the form
const name = prompt("Enter your name:");
const date = prompt("Enter the date:");

// Populate the certificate fields with the input values
document.getElementById("name").textContent = name;
document.getElementById("date").textContent = date;
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the default form submission

	// Get the input values from the form
	const name = document.getElementById("name-input").value;
	const subject = document.getElementById("subject-input").value;
	const date = document.getElementById("date-input").value;

	// Populate the certificate fields with the input values
	document.getElementById("name").textContent = name;
	document.getElementById("date").textContent = date;
});
