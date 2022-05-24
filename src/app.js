const http = require('node:http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk');
const path = require('path');
const route = require('./helper/route');

const server = http.createServer();
server.on('request', (req, res) => {
	const filePath = path.join(conf.root, req.url);
	route(req, res, filePath);
});
server.listen(conf.port, conf.hostname, () => {
	console.log(chalk.red('Hello World'));
});
