var http = require('http');
var dt = require('./module');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("The date and time are currently 2: " + dt.myDateTime());
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  //res.write(req.url);
  //res.end();
}).listen(8080);