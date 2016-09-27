var accounts = [];


// create account
function createAccount(account) {
	accounts.push(account);
	return account;
}

// getAccount
function getAccount(username) {
	var matchedAccount;
	var found = false;
	for(var i = 0; i < accounts.length && !found; i++) {
		if(accounts[i].userName === username){
			found = true;
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}


// deposit
function deposit(account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount;
	}
}

// withdraw
function withdraw(account, amount) {
	if (typeof amount === 'number') {
		account.balance -= amount;
	}
	
}

// getBalance
function getBalance(account) {
	console.log('Current balance: ' + account.balance);
	return account.balance
}

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var account = {
	balance: 100,
	userName: 123
}

createAccount(account);
console.log(getAccount(123));
var func = createBalanceGetter(account);
console.log('Balance is: ' + func());
getBalance(account);
deposit(account, 10);
deposit(account, 15);
getBalance(account);
withdraw(account, 3);
withdraw(account, 9);
getBalance(account);
