const fs = require('fs');
const promisifiy = require('util').promisify;

const read = promisifiy(fs.readFile)

// read('./demo/43_promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex);
// });

async function test() {
  try{
    const content = await read('./demo/43_promisify.js');
    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}
test();