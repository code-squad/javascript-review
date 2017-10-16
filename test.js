function showMessages(messages) {
	for (message in messages) {
		console.log(messages[message]);
	}
}

var messages = [];
messages.push('hello javascript');
messages.push('I am ram.');
showMessages(messages);