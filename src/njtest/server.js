// Load the HTTP library
var http = require("http");

// Create an HTTP server tohandle responses
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  })
  .listen(8888);
