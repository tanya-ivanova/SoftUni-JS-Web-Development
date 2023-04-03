const { hasUser } = require('../middlewares/guards');
const { create, getById, update, deleteById, commentPhoto, getAll } = require('../services/photoService');
const { getUserById } = require('../services/userService');
const { parseError } = require('../util/parser');

const photoController = require('express').Router();


photoController.get('/', async (req, res) => {
    const photos = await getAll();

    res.render('catalog', {
        title: 'Catalog',
        photos
    });
});

photoController.get('/:id/details', async (req, res) => {
    const photo = await getById(req.params.id);
    
    if(photo.commentList !== []) {        
        photo.commentList.map(async (x) => {
            const author = await getUserById(x.userId);            
            x.username = author.username;
        });
    }

    if (photo.owner._id == req.user?._id) {
        photo.isOwner = true;
    }
    if(req.user && !photo.isOwner) {
        photo.showAddComments = true;
    }    

    res.render('details', {
        title: 'Photo Details',
        photo
    });
});

photoController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Photo'
    });
});

photoController.post('/create', hasUser(), async (req, res) => {
    
    const photo = {
        name: req.body.name,      
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    };

    try {
        if (Object.values(photo).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(photo);
        res.redirect('/catalog');

    } catch (error) {               
        
        res.render('create', {
            title: 'Create Photo',
            photo,
            errors: parseError(error)
        });
    }
});

photoController.get('/:id/edit', hasUser(), async (req, res) => {
    const photo = await getById(req.params.id);

    if (photo.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Photo',
        photo
    });
});

photoController.post('/:id/edit', hasUser(), async (req, res) => {
    const photo = await getById(req.params.id);

    if (photo.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        name: req.body.name,      
        age: Number(req.body.age),
        description: req.body.description,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {        

        res.render('edit', {
            title: 'Edit Photo',
            photo: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

photoController.get('/:id/delete', hasUser(), async (req, res) => {
    const photo = await getById(req.params.id);

    if (photo.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/catalog');

});

photoController.post('/:id/comment', hasUser(), async (req, res) => {
    const photo = await getById(req.params.id);

    try {
        if (photo.owner._id == req.user._id) {
            photo.isOwner = true;
            throw new Error('Cannot comment your own photo');
        }        

        await commentPhoto(req.params.id, req.user._id, req.body.content);
        res.redirect(`/catalog/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Photo Details',
            photo,
            comment: {
                content: req.body.content
            },
            errors: parseError(error)
        });
    }
});



module.exports = photoController;