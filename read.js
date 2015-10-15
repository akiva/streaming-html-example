var fs = require('fs');
var path = require('path');

module.exports = function read(file) {
  return fs.createReadStream(path.join(__dirname, file));
}
