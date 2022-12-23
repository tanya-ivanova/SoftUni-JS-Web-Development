const { getLastThree } = require('../services/houseService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const houses = await getLastThree();

    res.render('home', {
        title: 'Home Page',
        houses
    });
});

module.exports = homeController;