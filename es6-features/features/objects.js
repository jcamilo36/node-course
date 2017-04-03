let age = 25;

function printHello () {
  console.log("Hello");
}

let person = {
  name: 'Andrew',
  age,
  printHello,
  ['hello' + (age + 2)]: 'I am here',
  printAge () {
    console.log(this.age);
  }
};

console.log(person.hello27);
person.printAge();
