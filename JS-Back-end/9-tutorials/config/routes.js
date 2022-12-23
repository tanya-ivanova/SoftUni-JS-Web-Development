const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const courseController = require("../controllers/courseController");
const { hasUser, isGuest } = require("../middlewares/guards");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/course', hasUser(), courseController);    
};