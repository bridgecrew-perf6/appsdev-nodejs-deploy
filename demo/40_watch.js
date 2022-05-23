const fs = require('fs');

fs.watch('./demo', {
  recursive: true
}, (eventType, filename) => {
  console.log(eventType, filename);
});