const fs = require('fs');

fs.mkdir('./demo/test', err => {
	if (err) throw err;
	console.log('done!');
});
