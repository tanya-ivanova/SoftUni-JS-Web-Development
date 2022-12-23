const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const cryptoController = require("../controllers/cryptoController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', cryptoController);
    app.all('*', (req, res) => {
        res.render('404');
    })
};