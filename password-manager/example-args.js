var argv = require('yargs')
	.command('hello', 'Greets the user', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastName: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];
console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined') {
	var name = argv.name;
	if (typeof argv.lastName !== 'undefined') {
		name += ' ' + argv.lastName;
	}
	console.log('Hello ' + name + '!');
} else if (command === 'hello') {
	console.log('Hello world!');
}
