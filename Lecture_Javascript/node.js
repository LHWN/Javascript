var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hello World\n');
  res.end();
}).listen(1337, 'localhost');
console.log('Server running at http://127.0.0.1:1337/');;
55
