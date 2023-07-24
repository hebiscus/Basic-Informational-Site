const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = "." + req.url;

    if (filePath == './') {
        filePath = './index.html';
    } else if (req.url == '/about') {
        filePath = './about.html'
    } else if (req.url == '/contact') {
        filePath = './contact-me.html'
    } else filePath = './404.html'

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end();
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
})

server.listen(8000, () => {
  console.log(`Server running at ${8000}`);
});