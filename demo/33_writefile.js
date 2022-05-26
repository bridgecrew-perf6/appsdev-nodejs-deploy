const fs = require('fs');

const content = Buffer.from('This is a test.');

// fs.writeFile('./demo/text', 'This is a test', {
//   encoding: 'utf8'
// }, err => {
//   if (err) throw err;
//   console.log('done!');
// })

fs.writeFile('./demo/text', content, err => {
  if (err) throw err;
  console.log('done!');
});
