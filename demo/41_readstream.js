const fs = require('fs');
const rs = fs.createReadStream('./demo/41_readstream.js');
rs.pipe(process.stdout);