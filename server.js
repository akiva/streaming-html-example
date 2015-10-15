var http = require('http');
var hyperstream = require('hyperstream');
var page = require('./page');
var read = require('./read');
var data = require('./data.json');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    layout(res, 'main.html')
  }
}).listen(8000, function () {
  console.log('Listening on port %s', this.address().port);
});

function layout(res, template) {
  var hs = hyperstream({
    'title': {
      _append: ' | ' + data.title
    },
    'header': read('header.html'),
    'nav': read('nav.html'),
    'main': page(template, data),
    'footer': read('footer.html')
  });
  res.setHeader('content-type', 'text/html');
  return read('index.html')
    .pipe(hs)
    .pipe(res);
}
