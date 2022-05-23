const fs = require('fs');

fs.readFile('./demo/32_readfile.js', (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(data.toString());
});

const data = fs.readFileSync('./demo/01_run.js', 'utf8');
console.log(data);