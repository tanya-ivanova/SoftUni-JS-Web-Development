const profileController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { getByUserBooking } = require('../services/hotelService');


profileController.get('/', hasUser(), async (req, res) => {
    const bookings = await getByUserBooking(req.user._id);    
    const names = bookings.map(b => b.name).join('; ');    

    res.render('profile', {
        title: 'Profile Page',
        user: req.user,
        names
    });
});

module.exports = profileController;
