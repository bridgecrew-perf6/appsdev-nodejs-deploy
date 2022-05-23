const fs = require('fs');

fs.rmdir('./demo/test', err => {
  if (err) throw err;
  console.log('done!');
});