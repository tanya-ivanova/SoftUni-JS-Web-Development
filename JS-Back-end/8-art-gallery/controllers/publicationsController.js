const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, sharePublication } = require('../services/publicationService');
const { parseError } = require('../util/parser');

const publicationController = require('express').Router();

publicationController.get('/', async (req, res) => {
    const publications = await getAll();

    res.render('gallery', {
        title: 'Gallery Page',
        publications
    });
});

publicationController.get('/:id/details', async (req, res) => {
    const publication = await getById(req.params.id);      

    if(req.user) {
        if (publication.owner._id == req.user._id) {
            publication.isOwner = true;
        } else if (publication.sharings.map(sh => sh.toString()).includes(req.user._id.toString())) {
            publication.isShared = true;
        }
    }

    res.render('details', {
        title: 'Publication Details',
        publication
    });
});

publicationController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Publication'
    });
});

publicationController.post('/create', hasUser(), async (req, res) => {
    const publication = {
        title: req.body.title,
        paintingTechnique: req.body.paintingTechnique,
        artPicture: req.body.artPicture,
        certificate: req.body.certificate,
        owner: req.user._id
    };

    try {
        if (Object.values(publication).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(publication);
        res.redirect('/publications');

    } catch (error) {
        res.render('create', {
            title: 'Create Publication',
            body: publication,
            errors: parseError(error)
        });
    }
});

publicationController.get('/:id/edit', hasUser(), async (req, res) => {
    const publication = await getById(req.params.id);

    if (publication.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Publication',
        publication
    });
});

publicationController.post('/:id/edit', hasUser(), async (req, res) => {
    const publication = await getById(req.params.id);

    if (publication.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,
        paintingTechnique: req.body.paintingTechnique,
        artPicture: req.body.artPicture,
        certificate: req.body.certificate        
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/publications/${req.params.id}/details`);

    } catch (error) {
        res.render('edit', {
            title: 'Edit Publication',
            publication: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

publicationController.get('/:id/delete', hasUser(), async (req, res) => {
    const publication = await getById(req.params.id);

    if (publication.owner._id != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/publications');

});

publicationController.get('/:id/share', hasUser(), async (req, res) => {
    const publication = await getById(req.params.id);

    try {
        if (publication.owner._id == req.user._id) {
            publication.isOwner = true;
            throw new Error('Cannot share your own publication');
        }

        if(publication.sharings.map(sh => sh.toString()).includes(req.user._id.toString())) {
            publication.isShared = true;
            throw new Error('Cannot share twice');
        }

        await sharePublication(req.params.id, req.user._id);
        res.redirect('/');

    } catch (error) {
        res.render('details', {
            title: 'Publication Details',
            hotel: publication,
            errors: parseError(error)
        });
    }
});

module.exports = publicationController;