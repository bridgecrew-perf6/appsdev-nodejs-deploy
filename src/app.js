const chalk = require('chalk');
const http = require('node:http');
const path = require('node:path');
const config = require('./config/defaultConfig');
const route = require('./helper/route');

const server = http.createServer((req, res) => {
  const filePath = path.join(config.root, req.url);
  route(req, res, filePath);
});
server.listen(config.port, config.hostname, () => {
  console.log(chalk.green('Hello World'));
});
