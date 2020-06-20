// destructure object to utilize hash property
// decode back into ascii string
const { hash } = window.location;
const message = atob(hash.replace('#', ''));

// check if a hash exists in URL and display encypted message
if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h1').innerHTML = message;
}

// stop default browser behavior to submit form to backend server
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	// hide input and display link when user submits
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	// get user input and encrypt the message
	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);

	// insert encypted message into link input for user to copy
	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});
