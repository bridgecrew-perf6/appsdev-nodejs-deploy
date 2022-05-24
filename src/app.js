const http = require('node:http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk');
const server = http.createServer();
server.on('request', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body>');
	res.write('Hello HTTP !');
	res.write('</body>');
	res.write('</html>');
	res.end();
});
server.listen(conf.port, conf.hostname, () => {
	console.log(chalk.red('Hello World'));
});
