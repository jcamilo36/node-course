var request = require('request');
var removeDiacritics = require('diacritics').remove;
module.exports = function (location, callback) {
	if (!location) {
		console.log('Location not provided');
	} else {
		var encodedLocation = encodeURIComponent(removeDiacritics(location));
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=fb0ea67c37e3f7ba7c291f617e0062b8&units=metric';
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				callback('Unable to fetch weather.');
			} else {
				callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	}
};
