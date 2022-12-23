const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const postController = require("../controllers/postController");
const profileController = require("../controllers/profileController");
const { hasUser } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/post', postController);
    app.use('/profile', profileController);
    app.all('*', (req, res) => {
        res.render('404');
    })
};