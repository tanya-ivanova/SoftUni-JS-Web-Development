const profileController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { getUserPhotos } = require('../services/photoService');


profileController.get('/', hasUser(), async (req, res) => {
    const userPhotos = await getUserPhotos(req.user._id);  
    
    res.render('profile', {
        title: 'Profile Page',
        user: req.user,
        userPhotos
    });
});

module.exports = profileController;
