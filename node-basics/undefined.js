function greetUser(name) {
	if (typeof name === 'string') {
		console.log('Hello ' + name);
	} else {
		console.log('Hello world');
	}
}

greetUser('Juan');
greetUser(1);
greetUser();

