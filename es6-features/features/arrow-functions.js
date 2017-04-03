var people = ['Andrew', 'Vikram', 'John', 'Audra'];

people.forEach(function (name) {
  console.log(name);
});

people.forEach((name) => console.log(name));

people.forEach((name) => {
  console.log('Welcome');
  console.log(name);
});

function add (a, b) {
  return a + b;
}

console.log(add(3,9));

var add2 = (a,b) => a + b;
console.log(add2(2,5));

var add3 = (a, b) => {return a + b;}
console.log(add3(1,2));

var person = {
  name: 'Andrew',
  likes: ['Movies', 'Programming', 'Running'],
  generateGreeter: function () {
    return () => {
      console.log(this.name);
    }
  },
  printLikes: function () {
      this.likes.forEach((like) => console.log(`${this.name} likes ${like}`));
  }
};

person.generateGreeter()();
person.printLikes();
