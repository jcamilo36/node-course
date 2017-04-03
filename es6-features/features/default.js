//function sayHello(name = 'World') {
//  console.log('Hello ' + name + '!');
//}
//
//sayHello();
//sayHello('Juan');

function greetUser (user = {name: 'Anonymous'}) {
  console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Vikram'});
