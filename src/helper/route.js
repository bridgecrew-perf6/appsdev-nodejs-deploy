const fs = require('node:fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const Handlebars = require('handlebars');
const path = require('node:path');
const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

const config = require('../config/defaultConfig');
const mime = require('./mime');
const compress = require('./compress');

module.exports = async (req, res, filePath) => {
  try {
    const stats = await stat(filePath);
    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      let rs = fs.createReadStream(filePath);
      if (filePath.match(config.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      const dir = path.relative(config.root, filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map((file) => {
          return {
            file: file,
            icon: mime(file)
          };
        })
      };
      res.end(template(data));
    }
  } catch (ex) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file.`);
  }
};
