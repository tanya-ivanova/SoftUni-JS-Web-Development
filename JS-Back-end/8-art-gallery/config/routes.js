const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const publicationsController = require("../controllers/publicationsController");
const profileController = require("../controllers/profileController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/publications', publicationsController);
    app.use('/profile', hasUser(), profileController);
    app.all('*', (req, res) => {
        res.render('404');
    })
};