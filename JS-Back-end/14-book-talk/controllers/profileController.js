const profileController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { getByUserWishings } = require('../services/bookService');


profileController.get('/', hasUser(), async (req, res) => {
    const wishedBooks = await getByUserWishings(req.user._id);    
    console.log(wishedBooks);    

    res.render('profile', {
        title: 'Profile Page',
        user: req.user,
        wishedBooks        
    });
});

module.exports = profileController;
