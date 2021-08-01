const http = require("http");

const port = process.argv[2];
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World! " + port);
};

const server = http.createServer(requestListener);
server.listen(port);
