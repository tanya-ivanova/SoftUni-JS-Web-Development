const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.method == 'GET') {
        if(req.url = './index.html') {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.createReadStream('./static/index.html').pipe(res);
            
            // res.writeHead(200, {
            //     'Content-type': 'text/html'
            // });

            // fileStream.on('data', chunk => res.write(chunk));
            // fileStream.on('end', () => res.end());


            // fs.readFile('./static/index.html', (err, file) => {
            //     res.writeHead(200, {
            //         'Content-type': 'text/html'
            //     });
            //     res.write(file);
            //     res.end();
            // });
        } else {
            res.writeHead(404);
            res.write('404 Not Found');
            res.end();
        }
        
    } else if(req.method == 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const result = JSON.parse(body.join(''))
            console.log(result);

            result.count++;
            res.writeHead({
                'Content-type': 'application/json'
            });
            res.write(JSON.stringify(result));
            res.end();
        });
    }
});

server.listen(3000);