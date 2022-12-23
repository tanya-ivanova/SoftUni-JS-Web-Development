const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, getByIdDetailed, update, deleteById, rentHouse, searchHouses } = require('../services/houseService');
const { parseError } = require('../util/parser');

const houseController = require('express').Router();


houseController.get('/', async (req, res) => {
    const houses = await getAll();
    
    res.render('housing-for-rent', {
        title: 'Housing for rent',
        houses
    });
});

houseController.get('/:id/details', async (req, res) => {
    const house = await getByIdDetailed(req.params.id);
    //console.log(house.usersRented.find(x => x._id.toString() == req.user?._id.toString()));
    if (house.owner == req.user?._id) {
        house.isOwner = true;
    } else if (house.usersRented.find(x => x._id.toString() == req.user?._id.toString())) {
        house.hasRented = true;
    }

    const peopleRentedTheHouse = house.usersRented.map(u => u.name).join(', ');    

    res.render('details', {
        title: 'House Details',
        house,
        peopleRentedTheHouse
    });
});

houseController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create House'
    });
});

houseController.post('/create', hasUser(), async (req, res) => {
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),        
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        availablePieces: Number(req.body.availablePieces),
        owner: req.user._id
    };

    try {
        if (Object.values(house).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(house);
        res.redirect('/house');

    } catch (error) {
        res.render('create', {
            title: 'Create House',
            house,
            errors: parseError(error)
        });
    }
});

houseController.get('/:id/edit', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    if (house.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit House',
        house
    });
});

houseController.post('/:id/edit', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    if (house.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        name: req.body.name,
        type: req.body.type,
        year: Number(req.body.year),        
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        availablePieces: Number(req.body.availablePieces)        
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/house/${req.params.id}/details`);

    } catch (error) {
        res.render('edit', {
            title: 'Edit House',
            house: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

houseController.get('/:id/delete', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    if (house.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/house');

});

houseController.get('/:id/rent', hasUser(), async (req, res) => {
    const house = await getById(req.params.id);

    try {
        if (house.owner == req.user._id) {
            house.isOwner = true;
            throw new Error('Cannot rent your own house');
        }

        if(house.usersRented.map(b => b.toString()).includes(req.user._id.toString())) {
            house.hasRented = true;
            throw new Error('Cannot rent twice');
        }

        await rentHouse(req.params.id, req.user._id);
        res.redirect(`/house/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'House Details',
            house,
            errors: parseError(error)
        });
    }
});

houseController.get('/search', async (req, res) => {
    const search = req.query.search;
    let houses = [];
    if(search) {
        houses = await searchHouses(search);
    }
    
    res.render('search', {
        title: 'Search Page',
        search,
        houses        
    });
});

module.exports = houseController;