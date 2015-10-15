var read = require('./read');
var hyperstream = require('hyperstream');

module.exports = function page(page, params) {
  var hs = hyperstream({
    'h1': params.title
  });
  return read(page)
    .pipe(hs)
}
