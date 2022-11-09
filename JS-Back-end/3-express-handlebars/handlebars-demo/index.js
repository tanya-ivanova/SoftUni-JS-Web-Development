const express = require('express');
const hbr = require('express-handlebars');

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // res.locals.message = 'Hello there';
    // res.locals.response = 'General Kenobi';

    res.render('home', {
        username: 'Peter',
        title: 'Handlebars Demo',
        message: 'Hello there',
        product: {
            name: 'Product 1',
            price: 19.50,
            color: 'Beige'
        },
        contacts: [
            {
                name: '<strong>Peter</strong>',
                email: 'peter@abv.bg'
            },
            {
                name: 'Mary',
                email: 'mary@abv.bg'
            },
            {
                name: 'John',
                email: 'john@abv.bg'
            }
        ]
    });
})

app.listen(3000);