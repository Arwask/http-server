const { readFile } = require('fs');

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    console.log('req.url', req.url)
    console.log('req.method', req.method)
    console.log('req.header', req.header)
    res.writeHead(200, {'useless-message':'Hello'})
    readFile('./index.html', (err, buffer) => {
        if(err)
            {
                res.statusCode = 404;
                res.end();
            }
        
        res.write(buffer);
        res.end();
    })
})
server.listen(8080);