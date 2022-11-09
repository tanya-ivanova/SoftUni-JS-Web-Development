const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        res.writeHead(404);
        res.write('404 Not Found');
        res.end();
    } else {
        // fs.readFile('./bigFile.txt', (err, file) => {
        //     res.write(file);
        //     res.end();
        // });
        
        fs.createReadStream('./bigFile.txt').pipe(res);
    }
});

server.listen(3000);