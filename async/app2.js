var weather = require('./weather2.js');
var location = require('./location2.js');
var args = require('yargs')
	.option('location', {
		alias: 'l',
		type: 'string',
		description: 'City\'s name'
	})
	.help('help')
	.argv;

var loc = args.location;
if (typeof loc !== 'undefined') {
  weather(loc).then(function(message) {
    console.log(message);
  }).catch(function(error) {
    console.log(error);
  });
} else {
  location().then(function(thelocation) {
    return weather(thelocation);
  }).then(function(message) {
    console.log(message);
  }).catch(function(error) {
    console.log(error);
  });
}
