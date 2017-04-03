//function greet (name = 'Juan') {
//  console.log('Hello ' + name + '!');
//  console.log(`Hello ${name}!`);
//}
//
//greet();
//greet('Kate');
//
//console.log(`1 + 6 = ${1+6}`);
//
//console.log(`Hey, 
//
//This kinda looks like an email!
//
//- Juan`);

var person = {
  name: 'Juan',
  age: 25
};

// function name anonymous, age, 0
var defaultPerson = {
  name: 'Anonymous',
  age: 0
};

function welcome (person = defaultPerson) {
  console.log(`Hello ${person.name}! You are ${person.age}!`);
}

welcome();
welcome(person);
