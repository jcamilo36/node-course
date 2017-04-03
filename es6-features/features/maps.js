let myMap = new Map();

// Set
myMap.set('name', 'Andrew');

// Get
console.log(myMap.get('name'));

// Has
myMap.set('age', 25);
console.log(myMap.has('age'));

// Delete
myMap.delete('name');

// Clear
myMap.clear();

// Size
console.log(myMap.size);

let user = {name: 'Andrew'};
myMap.set(user, 'Philadelphia');
console.log(myMap.get(user));

myMap.set(1, 'Juan');
myMap.set(2, 'Camilo');
myMap.set(3, 'Homer');

console.log([...myMap]);
console.log(myMap.keys());
console.log(myMap.values());

let location = {name: 'Philadelphia'};
let location2 = {name: 'Oslo'};

let mapW = new Map();
function setWeater(location, temp) {
  mapW.set(location, temp);
}

function printWeater(location) {
  if (mapW.has(location)) {
    console.log(`It's ${mapW.get(location)} at ${location.name}!`);
  } else {
    console.log('Location does not exist');
  }
}

setWeater(location, 22);
printWeater(location);
printWeater(location2);
