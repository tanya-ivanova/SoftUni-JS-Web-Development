const bcrypt = require('bcrypt');

// const hashedPass = bcrypt.hashSync('123456', 10);
// console.log(hashedPass);

// const result = bcrypt.compareSync('123456', '$2b$10$x6f5v1PzN/F3hw5r8I5uqeY1O5CRKQiWsZqVCTbLmGQNjbqpSYjA2');
// console.log(result);

async function hash(password) {
    return bcrypt.hash(password, 10);
}

async function compare(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hash,
    compare
};