var crypto = require('crypto-js');

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
}
var secretKey = '1231234567890asdfghjklQWERTYUIOP'

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log(decryptedMessage);
