var Pageres = require('pageres');

var date = new Date();

var pageres = new Pageres({ filename: date })
.src('tilde.club/~javier', ['1280x1024'])
.dest(__dirname + "/captures");

pageres.run(function (err) {
  if (err) {
    throw err;
  }
  console.log('done');
});
