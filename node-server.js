const { readFile, createReadStream } = require('fs');

const http = require('http');

const server = http.createServer();

var readStream = createReadStream('./index.html');

server.on('request', (req, res) => {

    console.log('req.url', req.url)
    console.log('req.method', req.method)
    console.log('req.header', req.headers)
    res.writeHead(200, {'useless-message':'Hello'})
    // readFile('./index.html', (err, buffer) => {
    //     if(err)
    //         {
    //             res.statusCode = 404;
    //             res.end();
    //         }
        
    //     res.write(buffer);
    //     res.end();
    // })

    readStream.on('error', err => {
        console.log(err);
        res.end(err);
    });
    
    readStream.on('data', buffer => {
        
        readStream.pipe(buffer);
        res.write(buffer.toString());
    })
    });

    readStream.on('close', () => {

    })
    // res.end();
server.listen(8080);