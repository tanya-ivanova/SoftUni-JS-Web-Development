const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/env');


module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if(token) {
        jwt.verify(token, JWT_SECRET, ((err, decodedToken) => {
            if(err) {
                res.clearCookie('token');
                res.redirect('/auth/login');
                return;
            }

            req.user = decodedToken;
            res.locals.username = decodedToken.username;

            next();
        }));

    } else {
        next();
    }    
};