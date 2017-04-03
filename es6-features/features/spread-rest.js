//function add (a, b) {
//  return a + b;
//}
//
//var numbers = [4,22];
//
//console.log(add(1,4));
//console.log(add(...numbers));

var groupA = [33,99];
var groupB = [11];
var unified = [0,...groupA,...groupB,100];

unified.push(...[55, 33]);

console.log(unified);



function greetUsers(group, ...names) {
  names.forEach(function (name) {
    console.log(`Hello ${name}. You are part of ${group}`);
  });
}

greetUsers('Developer', 'Andrew', 'Mike', 'Jen');

function adder(base, ...numbers) {
  numbers.forEach(function (number) {
    console.log(base + number);
  });
}

adder(3,5,7,1);
