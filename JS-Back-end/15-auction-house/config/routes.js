const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const auctionController = require("../controllers/auctionController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', auctionController);
    app.all('*', (req, res) => {
        res.render('404');
    })
};