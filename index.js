// stop default browser behavior to submit form to backend server
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const input = document.querySelector('input');
	console.log(input.value);
});
