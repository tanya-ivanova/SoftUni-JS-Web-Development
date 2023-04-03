const { hasUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, apply, getAll, searchAds } = require('../services/adService');
const { parseError } = require('../util/parser');

const adController = require('express').Router();


adController.get('/', async (req, res) => {
    const ads = await getAll();

    res.render('all-ads', {
        title: 'Catalog',
        ads
    });
});

adController.get('/:id/details', async (req, res) => {
    const ad = await getById(req.params.id);

    if (ad.owner._id == req.user?._id) {
        ad.isOwner = true;
    } else if (ad.usersApplied.map(x => x._id.toString()).includes(req.user?._id.toString())) {
        ad.hasApplied = true;
    }

    res.render('details', {
        title: 'Ad Details',
        ad
    });
});

adController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Ad'
    });
});

adController.post('/create', hasUser(), async (req, res) => {
    
    const ad = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,     
        companyDescription: req.body.companyDescription,        
        owner: req.user._id
    };

    try {
        if (Object.values(ad).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(ad);
        res.redirect('/catalog');

    } catch (error) {             
        
        res.render('create', {
            title: 'Create Ad',
            ad,
            errors: parseError(error)
        });
    }
});

adController.get('/:id/edit', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);

    if (ad.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Ad',
        ad
    });
});

adController.post('/:id/edit', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);

    if (ad.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,     
        companyDescription: req.body.companyDescription,      
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {       

        res.render('edit', {
            title: 'Edit Add',
            ad: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

adController.get('/:id/delete', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);

    if (ad.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/catalog');

});

adController.get('/:id/apply', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);

    try {
        if (ad.owner._id == req.user._id) {
            ad.isOwner = true;
            throw new Error('Cannot apply for your own ad');
        }

        if(ad.usersApplied.map(x => x._id.toString()).includes(req.user._id.toString())) {
            ad.hasApplied = true;
            console.log(ad.hasApplied)
            throw new Error('Cannot apply twice');
        }

        await apply(req.params.id, req.user._id);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Crypto Details',
            offer: ad,
            errors: parseError(error)
        });
    }
});

adController.get('/search', hasUser(), async (req, res) => {   
    const search = req.query.search;    

    let searchedAds = [];
    if(search) {
        searchedAds = await searchAds(search);
    }   
    
    res.render('search', {
        title: 'Search Page',
        searchedAds,
        search        
    });
});


module.exports = adController;