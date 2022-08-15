const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("new connection");
});

server.listen(1234);
console.log("Listening on port 1234...");
// server.close();
