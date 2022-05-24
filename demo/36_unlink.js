const fs = require('fs');

fs.unlink('./demo/text.txt', err => {
	if (err) throw err;
	console.log('done!');
});
