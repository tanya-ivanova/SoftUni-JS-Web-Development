//const validator = require('validator');
const {body, validationResult} = require('express-validator');
const authController = require('express').Router();
const { login, register } = require('../services/authService');
const { parseError } = require('../utils/errorParser');



authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

authController.post('/login', 
    body(['username', 'password']).trim(),
    async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        attachToken(req, res, result);
        res.redirect('/');

    } catch (error) {
        res.render('login', {
            title: 'Login',
            body: {
                username: req.body.username
            },
            error: parseError(error)
        });
    }
});

authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

authController.post('/register', 
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required').bail()
        .isAlphanumeric().withMessage('Username may contain only latin letters and digits'),
    body('password')
        .trim()
        //.notEmpty().withMessage('Password is required')
        .isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('repass')
        .trim()
        .customSanitizer((value, {req}) => {
            return value.trim();
        })
        .custom(async (value, {req}) => {
            if(value != req.body.password) {
                throw new Error('Passwords don\'t match');
            }
        }),
    async (req, res) => {
    try {    
        // if (validator.isEmpty(req.body.username.trim()) || validator.isEmpty(req.body.password.trim())) {
        //     throw new Error('All fields are required!');
        // }
        // if (req.body.password.trim() != req.body.repass.trim()) {
        //     throw new Error('Passwords don\'t match!');
        // }

        //const isValid = validationResult(req);
        const {errors} = validationResult(req);
        console.log(errors);
        if(errors.length > 0) {
            throw errors;
        } 
           
        const result = await register(req.body.username, req.body.password);
        attachToken(req, res, result);
        res.redirect('/');

    } catch (error) {        
        res.render('register', {
            title: 'Register',
            body: {
                username: req.body.username
            },
            error: parseError(error)
        });
    }
});

authController.get('/logout', (req, res) => {    
    res.clearCookie('jwt');
    res.redirect('/');
});

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}


module.exports = authController;