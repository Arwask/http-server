const { readFile, createReadStream } = require('fs');

const http = require('http');

const server = http.createServer();

var readStream = createReadStream('./index.html');

server.on('request', (req, res) => {
  res.writeHead(200, { 'useless-message': 'Hello' });
  // res.write('<h1>Hello World</h1>');
  // res.end();
  readFile('./index.html', (err, buffer) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    }

    res.write(buffer);
  });

  readStream.on('error', err => {
    console.log(err);
    res.end(err);
  });

  //   readStream.on('data', buffer => {
  //     readStream.pipe(buffer);
  //     res.write(buffer.toString());
  //     res.end();
  //   });
});

readStream.on('close', () => {});
// res.end();
server.listen(8080, () => {
  console.log('listening on 8080');
});
