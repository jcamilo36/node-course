var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();

var args = require('yargs')
		.command('create', 'Create a new account', function(yargs) {
			yargs.options({
				name: {
					demand: 'true',
					alias: 'n',
					type: 'string',
					description: "Account's name"
				},
				username: {
					demand: 'true',
					alias: 'u',
					type: 'string',
					description: "Account's user name"
				},
				password: {
					demand: 'true',
					alias: 'p',
					type: 'string',
					description: "Account's password"
				},
				masterPassword: {
					demand: 'true',
					alias: 'm',
					type: 'string',
					description: "Master password"
				}
			}).help('help');
		})
		.command('get', 'Get an account', function(yargs) {
			yargs.options({
				name: {
					demand: 'true',
					alias: 'n',
					type: 'string',
					description: "Account's name"
				},
				masterPassword: {
					demand: 'true',
					alias: 'm',
					type: 'string',
					description: "Master password"
				}
			}).help('help');
		})
		.help('help')
		.argv;


var command = args._[0];
if (command === 'create') {
	try {
		var account = {
			name :  args.name,
			username : args.username,
			password : args.password
		};
		console.log(account);
		console.log(createAccount(account, args.masterPassword));
	} catch (e) {
		console.log('Unable to create an account. Check your master password.');
	}
} else if (command === 'get') {
	try {
		var matchedAccount = getAccount(args.name, args.masterPassword);
		if (typeof matchedAccount === 'undefined') {
			console.log('Account not found');
		} else {
			console.log(matchedAccount);	
		}
	} catch (e) {
		console.log('Unable to get an account. Check your master password.');
	}
} else {
	console.log('Command not found');
}

function createAccount(account, masterPassword) {
	//var accounts = storage.getItemSync('accounts');
	//if (typeof accounts === 'undefined') {
	//	accounts = [];
	//}
	var accounts = getAccounts(masterPassword);
	accounts.push(account);
	//storage.setItemSync('accounts', accounts);
	return saveAccounts(accounts, masterPassword);
}

function getAccount(accountName, masterPassword) {
	//var accounts = storage.getItemSync('accounts');
	var accounts = getAccounts(masterPassword);
	var account = undefined;
	if (typeof accounts !== 'undefined') {
		var found = false;
		for(var i = 0; i < accounts.length && !found; i++) {
			if (accounts[i].name === accountName){
				account = accounts[i];
				found = true;
			}
		}
	}
	return account;
}

function getAccounts(masterPassword) {
	var encryptedAccounts =	storage.getItemSync('accounts');
	var array = [];
	if (typeof encryptedAccounts !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
		array = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	console.log(array);
	return array;
	
}

function saveAccounts(accounts, masterPassword) {
	console.log(accounts);
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return encryptedAccounts;
}
//var account1 = {
//	name : 'Facebook',
//	username : 'user12',
//	password : 'qwerty'
//};
//
//var account2 = {
//	name : 'Google',
//	username : 'user34',
//	password : 'asdf'
//};
//
//var account3 = {
//	name : 'Netflix',
//	username : 'user56',
//	password : 'zxcv'
//};
//
//createAccount(account1);
//createAccount(account2);
//createAccount(account3);
//
//console.log(getAccount('Google'));
//storage.setItemSync('accounts', [{
//	username: 'Andrew',
//	balance: 0
//}]);
//var accounts = storage.getItemSync('accounts');
//var account2 = {
//	username: 'Juan',
//	balance: 100
//};
//accounts.push(account2);
//storage.setItemSync('accounts', accounts);
//var res = storage.getItemSync('accounts');
//console.log(res);
