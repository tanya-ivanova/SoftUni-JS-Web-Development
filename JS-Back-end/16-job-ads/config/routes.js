const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const adController = require("../controllers/adController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', adController);
    app.all('*', (req, res) => {
        res.render('404');
    });
};