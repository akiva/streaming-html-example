var hyperstream = require('hyperstream');
var page = require('./page');
var read = require('./read');
var data = require('./data.json');

var hs = hyperstream({
  'title': {
    _append: ' | ' + data.title
  },
  'header': read('header.html'),
  'nav': read('nav.html'),
  'main': page('main.html', data),
  'footer': read('footer.html')
});

read('index.html')
  .pipe(hs)
  .pipe(process.stdout);
