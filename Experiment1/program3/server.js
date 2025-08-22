const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("File not found!");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
