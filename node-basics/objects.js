var person = {
	gender: 'male',
	eyeColor: 'brown'
};
person['firstName'] = 'Juan';
person.lastName = 'Cortés';
person.age = 24;

delete person.age;
console.log(person);

function greetUser (per) {
	console.log('Hello ' + per.firstName + ' ' + per.lastName);
}

greetUser(person);

var pet = {
	name: 'Thor',
	type: 'Dog'
}

function printPet(petObj) {
	console.log('You own a ' + petObj['type'] + ' named ' + petObj['name']);
}

printPet(pet);
