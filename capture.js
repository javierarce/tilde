var Pageres = require('pageres');

var pageres = new Pageres({ delay: 2 })
.src('tilde.club/~javier', ['1280x1024'])
.dest(__dirname + "/captures");

pageres.run(function (err) {
  if (err) {
    throw err;
  }
  console.log('done');
});
