var weather = require('./weather.js');
var location = require('./location.js');
var args = require('yargs')
	.option('location', {
		alias: 'l',
		type: 'string',
		description: 'City\'s name'
	})
	.help('help')
	.argv;

var printWeatherCallback = function(currentWeather) {
	console.log(currentWeather);
};

var loc = args.location;
if (typeof loc !== 'undefined') {
	weather(loc, printWeatherCallback);
} else {
	location(function (thelocation) {
		if (!thelocation) {
			console.log('Unable to guess location');
			return;
		} else {
			weather(thelocation.city, printWeatherCallback);
		}
	});
}
