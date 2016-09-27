function doWork(shouldFail) {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			if (typeof shouldFail === 'boolean' && shouldFail === true) :
			console.log('done!');
			resolve();
		}, 1000);
	});
}

doWork().then(function () {
	return doWork(true);
}).then(function () {
	console.log('all done!');
}, function (error) {
	console.log(error);
});
