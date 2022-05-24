const fs = require('fs');

fs.rename('./demo/text', './demo/text.txt', err => {
	if (err) throw err;
	console.log('done!');
});
