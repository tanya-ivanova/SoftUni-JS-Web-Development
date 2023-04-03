const homeController = require('express').Router();
const { getFirstThree } = require('../services/adService');

homeController.get('/', async (req, res) => {   
    const ads = await getFirstThree();

    res.render('home', {
        title: 'Home Page',
        ads
    });
});


module.exports = homeController;