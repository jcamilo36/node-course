var locations = [];

locations.push({
  name: 'Philadelphia',
  weather: 22
});

locations.push({
  name: 'Mexico City',
  weather: 52
});

for (let location of locations) {
 console.log(`It's ${location.weather} in ${location.name}.`); 
}

function averageGrade(... numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total / numbers.length;
}

let total = averageGrade(1, 44, 99);
console.log(total);
