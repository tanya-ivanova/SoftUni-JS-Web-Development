const profileController = require('express').Router();
const { getByUserSharing, getByOwner } = require('../services/publicationService');


profileController.get('/', async (req, res) => {
    const sharings = await getByUserSharing(req.user._id);    
    const sharingsNames = sharings.map(b => b.title).join(', ');
    const ownPublications = await getByOwner(req.user._id);
    const ownPublicationsNames = ownPublications.map(p => p.title).join(', ');
    

    res.render('profile', {
        title: 'Profile Page',
        user: req.user,
        sharingsNames,
        ownPublicationsNames
    });
});

module.exports = profileController;
