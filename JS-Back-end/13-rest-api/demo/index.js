const express = require('express');

const products = [
    {
        id: 'asdf1',
        name: 'Product 1',
        price: 110
    },
    {
        id: 'asdf2',
        name: 'Product 2',
        price: 75
    },
    {
        id: 'asdf3',
        name: 'Product 3',
        price: 165
    }
];

const app = express();

app.use(express.static('static'));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.get('/data', (req, res) => {
    res.json(products);
});

app.post('/data', (req, res) => {
    const record = {
        id: ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6),
        name: req.body.name,
        price: Number(req.body.price)
    };
    products.push(record);
    res.status(201).json(record);
});

app.get('/data/:id', (req, res) => {
    const item = products.find(x => x.id == req.params.id);
    res.json(item);
});

app.delete('/data/:id', (req, res) => {
    const itemIndex = products.findIndex(x => x.id == req.params.id);
    products.splice(itemIndex, 1);
    res.status(202).end();
});

app.put('/data/:id', (req, res) => {
    const item = products.find(x => x.id == req.params.id);
    item.name = req.body.name;
    item.price = Number(req.body.price);

    res.status(202).end();
});

app.listen(3030);