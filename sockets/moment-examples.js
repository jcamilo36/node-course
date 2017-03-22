var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = 1490200069405
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));

//now.subtract(1, 'year');
//console.log(now.format());
//console.log(now.format('MMM Do YYYY, h:mma'));
