const fs = require('fs');

fs.readdir('./demo', (err, files) => {
  if (err) throw err;
  console.log(files);
});