function doWork(shouldFail) {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			if (typeof shouldFail === 'boolean' && shouldFail === true) {
				reject('error message');
			} else {
				resolve('success');
			} 
		}, 1000);
	});
}

// with then and 2 params
//doWork(true).then(function (message) {
//	console.log(message);
//	return doWork(true);
//}).then(function (message) {
//	console.log(message);
//	console.log('all done!');
//}, function (error) {
//	console.log(error);
//});
	
// with catch block
//doWork(true).then(function (message) {
//	console.log(message);
//	return doWork(true);
//}).then(function (message) {
//	console.log(message);
//	console.log('all done!');
//}).catch(function (error) {
//	console.log(error);
//});

function getLocation() {
  return new Promise(function(resolve, reject) {
    resolve("Bogota");
  });
}

function getWeather(location) {
  return new Promise(function(resolve, reject) {
    resolve("It's 20 in " + location);
  });
}

getLocation().then(function (location) {
  return getWeather(location);
}).then(function (message) {
  console.log(message);
}).catch(function (error) {
  console.log(error);
});
