var fs = require('fs');
var path = require('path');

var DOMAINS_FILE = path.join(__dirname, 'domains.txt');

var table = {};
var domains = fs.readFileSync(DOMAINS_FILE, {encoding: 'utf8'});
domains.split('\n').map(function(domain) {
	return domain.toLowerCase().trim();
}).forEach(function(domain) {
	table[domain] = 1;
});

module.exports = function(email) {
	var pos = email.indexOf('@');
	if(pos !== -1) {
		email = email.substr(pos + 1);
	}
	email = email.toLowerCase().trim();
	return table[email];
}
