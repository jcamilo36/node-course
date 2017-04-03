var chatRooms = new Set();

// Add
chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');

// Size
console.log(chatRooms.size);

// Has
console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// Delete
//chatRooms.delete('Bikers');
//console.log(chatRooms.size);
//chatRooms.clear();
//console.log(chatRooms.size);

chatRooms.add({name: 'Andrew'});
// To array
console.log([...chatRooms]);

chatRooms.forEach(function (chatRoom) {
  console.log(`Found chat room: ${chatRoom}`);
});


var movieSet = new Set();
function addMovie(movieTitle) {
  if (movieSet.has(movieTitle)) {
    console.log(`${movieTitle} is already set!`);
  } else {
    movieSet.add(movieTitle);
    console.log(`${movieTitle} was successfully added!`);
  } 
}

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');
