const { hasUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, bidAuction, getAll, closeAuction, getAllClosed } = require('../services/auctionService');
const { parseError } = require('../util/parser');

const cryptoController = require('express').Router();


cryptoController.get('/', async (req, res) => {
    const auctions = await getAll();

    res.render('catalog', {
        title: 'Catalog',
        auctions
    });
});

cryptoController.get('/:id/details', async (req, res) => {
    const auction = await getById(req.params.id);
    auction.ownerFullName = `${auction.owner.firstName} ${auction.owner.lastName}`; 
    auction.bidderFullName = `${auction.bidder?.firstName} ${auction.bidder?.lastName}`;   
    
    if (auction.owner._id == req.user?._id) {
        auction.isOwner = true;
    } else if (auction.bidder?._id == req.user?._id) {
        auction.isBidder = true;
    }

    if(auction.isOwner) {
        res.render('details-owner', {
            title: 'Auction Details',
            auction
        });
    } else {
        res.render('details-notowner', {
            title: 'Auction Details',
            auction
        });
    }
    
});

cryptoController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Auction'
    });
});

cryptoController.post('/create', hasUser(), async (req, res) => {
    
    const auction = {
        title: req.body.title,        
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price),     
        owner: req.user._id
    };

    try {
        if (Object.values(auction).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(auction);
        res.redirect('/catalog');

    } catch (error) {
        if(req.body.category == 'estate') {
            auction.categoryEstate = true;
        } else if (req.body.category == 'vehicles') {
            auction.categoryVehicles = true;
        } else if (req.body.category == 'furniture') {
            auction.categoryFurniture = true;
        } else if (req.body.category == 'electronics') {
            auction.categoryElectronics = true;
        } else if (req.body.category == 'other') {
            auction.categoryOther = true;
        }        
        
        res.render('create', {
            title: 'Create Auction',
            auction,
            errors: parseError(error)
        });
    }
});

cryptoController.get('/:id/edit', hasUser(), async (req, res) => {
    const auction = await getById(req.params.id);
   
    auction.hasBidder = auction.bidder ? true : false;    

    if (auction.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Auction',
        auction
    });
});

cryptoController.post('/:id/edit', hasUser(), async (req, res) => {
    const auction = await getById(req.params.id);

    if (auction.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,        
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: Number(req.body.price)
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        if(req.body.category == 'estate') {
            auction.categoryEstate = true;
        } else if (req.body.category == 'vehicles') {
            auction.categoryVehicles = true;
        } else if (req.body.category == 'furniture') {
            auction.categoryFurniture = true;
        } else if (req.body.category == 'electronics') {
            auction.categoryElectronics = true;
        } else if (req.body.category == 'other') {
            auction.categoryOther = true;
        }

        res.render('edit', {
            title: 'Edit Auction',
            auction: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

cryptoController.get('/:id/delete', hasUser(), async (req, res) => {
    const auction = await getById(req.params.id);

    if (auction.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/catalog');

});

cryptoController.post('/:id/bid', hasUser(), async (req, res) => {
    const auction = await getById(req.params.id);
    const bidAmount = Number(req.body.bidAmount);

    try {
        if (auction.owner._id == req.user._id) {
            auction.isOwner = true;
            throw new Error('Cannot bid your own auction');
        }

        if(auction.bidder?._id == req.user._id) {
            auction.isBidder = true;
            throw new Error('You already bid');
        }

        if(bidAmount <= auction.price) {
            throw new Error('Bidding amount can\'t be less or equal to the current price');
        }

        await bidAuction(req.params.id, req.user._id, bidAmount);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        res.render('details-notowner', {
            title: 'Auction Details',
            auction,
            errors: parseError(error)
        });
    }
});

cryptoController.get('/:id/close', hasUser(), async (req, res) => {
    const auction = await getById(req.params.id);
   
    if(!auction.bidder) {
        throw new Error('You can\'t close auction without a bidder');
    } 
    
    if(auction.closed) {
        throw new Error('The auction is already closed');
    }

    if (auction.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    await closeAuction(req.params.id);

    res.redirect('/catalog/closed');    
});

cryptoController.get('/closed', hasUser(), async (req, res) => {
    const result = await getAllClosed(req.user._id);
    closedAuctions = result.map(x => Object.assign(x, {bidderFullName: `${x.bidder?.firstName} ${x.bidder?.lastName}`}));
    
    res.render('closed-auctions', {
        title: 'Closed Auctions',
        closedAuctions
    });        
});



module.exports = cryptoController;