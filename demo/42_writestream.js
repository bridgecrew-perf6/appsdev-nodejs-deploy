const fs = require('fs');
const ws = fs.createWriteStream('./demo/test.txt');

const tid = setInterval(() => {
	const num = parseInt(Math.random() * 10);
	if (num < 7) {
		ws.write(num.toString());
	} else {
		clearInterval(tid);
		ws.end();
	}
}, 500);

ws.on('finish', () => {
	console.log('done!');
});
