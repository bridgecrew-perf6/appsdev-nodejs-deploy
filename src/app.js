const http = require('node:http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, res) => {
	const filePath = path.join(conf.root, req.url);
	fs.stat(filePath, (err, stats) => {
		if (err) {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end(`${filePath} is not a directory or file`);
			return;
		}
		if (stats.isFile()) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			fs.createReadStream(filePath).pipe(res);
		} else if (stats.isDirectory()) {
			fs.readdir(filePath, (err, files) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'text/plain');
				res.end(files.join(','));
			});
		}
	});
});
server.listen(conf.port, conf.hostname, () => {
	console.log(chalk.red('Hello World'));
});
