const { hasUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, buyCrypto, getAll, searchCrypto } = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const cryptoController = require('express').Router();


cryptoController.get('/', async (req, res) => {
    const offers = await getAll();

    res.render('catalog', {
        title: 'Catalog',
        offers
    });
});

cryptoController.get('/:id/details', async (req, res) => {
    const offer = await getById(req.params.id);

    if (offer.owner == req.user?._id) {
        offer.isOwner = true;
    } else if (offer.boughtCrypto.map(b => b.toString()).includes(req.user?._id.toString())) {
        offer.hasBought = true;
    }

    res.render('details', {
        title: 'Crypto Details',
        offer
    });
});

cryptoController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Crypto'
    });
});

cryptoController.post('/create', hasUser(), async (req, res) => {
    
    const crypto = {
        name: req.body.name,        
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        payment: req.body.payment,
        owner: req.user._id
    };

    try {
        if (Object.values(crypto).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(crypto);
        res.redirect('/catalog');

    } catch (error) {
        if(req.body.payment == 'crypto-wallet') {
            crypto.paymentCryptoWallet = true;
        } else if (req.body.payment == 'credit-card') {
            crypto.paymentCreditCard = true;
        } else if (req.body.payment == 'debit-card') {
            crypto.paymentDebitCard = true;
        } else if (req.body.payment == 'paypal') {
            crypto.paymentPaypal = true;
        }        
        
        res.render('create', {
            title: 'Create Crypto',
            crypto,
            errors: parseError(error)
        });
    }
});

cryptoController.get('/:id/edit', hasUser(), async (req, res) => {
    const crypto = await getById(req.params.id);

    if (crypto.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Crypto',
        crypto
    });
});

cryptoController.post('/:id/edit', hasUser(), async (req, res) => {
    const offer = await getById(req.params.id);

    if (offer.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        name: req.body.name,        
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),
        description: req.body.description,
        payment: req.body.payment
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        if(req.body.payment == 'crypto-wallet') {
            edited.paymentCryptoWallet = true;
        } else if (req.body.payment == 'credit-card') {
            edited.paymentCreditCard = true;
        } else if (req.body.payment == 'debit-card') {
            edited.paymentDebitCard = true;
        } else if (req.body.payment == 'paypal') {
            edited.paymentPaypal = true;
        }

        res.render('edit', {
            title: 'Edit Crypto',
            crypto: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

cryptoController.get('/:id/delete', hasUser(), async (req, res) => {
    const offer = await getById(req.params.id);

    if (offer.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/catalog');

});

cryptoController.get('/:id/buy', hasUser(), async (req, res) => {
    const offer = await getById(req.params.id);

    try {
        if (offer.owner == req.user._id) {
            offer.isOwner = true;
            throw new Error('Cannot buy your own crypto');
        }

        if(offer.boughtCrypto.map(b => b.toString()).includes(req.user._id.toString())) {
            offer.hasBought = true;
            throw new Error('Cannot buy twice');
        }

        await buyCrypto(req.params.id, req.user._id);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Crypto Details',
            offer,
            errors: parseError(error)
        });
    }
});

cryptoController.get('/search', hasUser(), async (req, res) => {   
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


module.exports = cryptoController;