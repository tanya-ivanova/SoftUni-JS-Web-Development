const { hasUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, wishToRead, getAll, searchCrypto } = require('../services/bookService');
const { parseError } = require('../util/parser');

const bookController = require('express').Router();


bookController.get('/', async (req, res) => {
    const books = await getAll();

    res.render('catalog', {
        title: 'Catalog',
        books
    });
});

bookController.get('/:id/details', async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner == req.user?._id) {
        book.isOwner = true;
    } else if (book.wishingList.map(b => b.toString()).includes(req.user?._id.toString())) {
        book.hasWished = true;
    }

    res.render('details', {
        title: 'Book Details',
        book
    });
});

bookController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Book'
    });
});

bookController.post('/create', hasUser(), async (req, res) => {
    
    const book = {
        title: req.body.title,
        author: req.body.author, 
        genre: req.body.genre, 
        stars: Number(req.body.stars),      
        imageUrl: req.body.imageUrl,        
        review: req.body.review,        
        owner: req.user._id
    };

    try {
        if (Object.values(book).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(book);
        res.redirect('/catalog');

    } catch (error) {           
        
        res.render('create', {
            title: 'Create Book',
            book,
            errors: parseError(error)
        });
    }
});

bookController.get('/:id/edit', hasUser(), async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Book',
        book
    });
});

bookController.post('/:id/edit', hasUser(), async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,
        author: req.body.author, 
        genre: req.body.genre, 
        stars: Number(req.body.stars),      
        imageUrl: req.body.imageUrl,        
        review: req.body.review,
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {       

        res.render('edit', {
            title: 'Edit Book',
            book: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

bookController.get('/:id/delete', hasUser(), async (req, res) => {
    const book = await getById(req.params.id);

    if (book.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/catalog');
});

bookController.get('/:id/wish', hasUser(), async (req, res) => {
    const book = await getById(req.params.id);

    try {
        if (book.owner == req.user._id) {
            book.isOwner = true;
            throw new Error('Cannot wish to read your own book');
        }

        if(book.wishingList.map(b => b.toString()).includes(req.user._id.toString())) {
            book.hasWished = true;
            throw new Error('Cannot wish to read twice');
        }

        await wishToRead(req.params.id, req.user._id);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Book Details',
            book,
            errors: parseError(error)
        });
    }
});

bookController.get('/search', hasUser(), async (req, res) => {   
    const search = req.query.search;
    const payment = req.query.payment;
    const paymentType = {};

    let offers = [];
    if(search) {
        offers = await searchCrypto(search, payment);
    } else {
        offers = await getAll();
    }

    if(payment == 'crypto-wallet') {
        paymentType.cryptoWallet = true;
    } else if (payment == 'credit-card') {
        paymentType.creditCard = true;
    } else if (payment == 'debit-card') {
        paymentType.debitCard = true;
    } else if (payment == 'paypal') {
        paymentType.paypal = true;
    }

    console.log(paymentType);
    
    res.render('search', {
        title: 'Search Page',
        offers,
        search,
        paymentType
    });
});


module.exports = bookController;