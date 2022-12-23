const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {JWT_SECRET} = require('../config/env');
const {SALT_ROUNDS} = require('../constants');


async function register(username, email, password) {   

    const existingEmail = await User.findOne({email}).collation({locale: 'en', strength: 2});
    if(existingEmail) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        username,
        email,        
        hashedPassword
    });

    const token = createSession(user);
    return token;
}

async function login(email, password) {
    const user = await User.findOne({email}).collation({locale: 'en', strength: 2});

    if(!user) {
        throw new Error('Incorrect email or password');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if(hasMatch == false) {
        throw new Error('Incorrect email or password');
    }

    const token = createSession(user);
    return token;
}

function createSession({_id, email, username}) {
    const payload = {
        _id,
        email,
        username
    };

    const options = {expiresIn: '5d'};

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, options, (err, encodedToken) => {
            if(err) {
                return reject(err);
            }

            resolve(encodedToken);
        });
    });

    return tokenPromise;    
}


module.exports = {
    register,
    login
}