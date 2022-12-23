const express = require('express');
const catalogController = require('./catalogController');
const createController = require('./createController');
const logger = require('./logger');

const app = express();

app.use('/static', express.static('public'));

// app.get('/', (req, res) => {
//     //res.send('Hello there');
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/img', (req, res) => {
//     res.download(__dirname + '/my picture.jpg');
// });

// app.route('/create')
//     .get((req, res) => {
//         res.send('<form method="POST"><input name="name"><button>Send</button></form>');
//     })
//     .post((req, res) => {
//         console.log('Handling POST request');
//         res.end();
//     });

app.use(logger());

app.use('/create', createController);

// app.get('/catalog/*', (req, res) => {
//     res.send('Product Details page');
// });

app.use('/catalog', (req, res, next) => {    
    console.log('>>>', req.method, req.url);
    next();
}, catalogController);

app.get('/data', (req, res) => {
    res.json([
        {
            name: "Ivan",
            age: 25
        },
        {
            name: "Peter",
            age: 31
        }
    ]);
});

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found (Custom Page)');
});

app.listen(3000);