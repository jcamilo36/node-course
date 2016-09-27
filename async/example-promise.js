//function doWork (data) {
//	return new Promise(function (resolve, reject) {
//		setTimeout(function() {
//			reject('everything is broken!');	
//		}, 1000);
//		//reject({
//		//	error: 'something bad happened'
//		//});
//	});
//}
//
//doWork('some data').then(function (data) {
//	console.log(data);
//}, function (error) {
//	console.log(error);
//});


var request = require('request');
var removeDiacritics = require('diacritics').remove;

function getWeather (location) {
	return new Promise(function(resolve, reject) {
		if (!location) {
			reject('Location not provided');
		} else {
			var encodedLocation = encodeURIComponent(removeDiacritics(location));
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=fb0ea67c37e3f7ba7c291f617e0062b8&units=metric';
			request({
				url: url,
				json: true
			}, function (error, response, body) {
				if (error) {
					reject('Unable to fetch weather.');
				} else {
					resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
				}
			});
		}
	});
}

getWeather('New York').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error); 
});
