const { isGuest } = require('../middlewares/guards');
const { getAllForGuests } = require('../services/courseService');

const homeController = require('express').Router();

homeController.get('/', isGuest(), async (req, res) => {
    const courses = await getAllForGuests();

    res.render('guestHome', {
        title: 'Home Page',
        courses
    });
});

module.exports = homeController;