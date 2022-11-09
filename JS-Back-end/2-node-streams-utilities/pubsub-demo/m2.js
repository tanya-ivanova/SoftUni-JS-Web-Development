// const {publish} = require('./observer');

// let counter = 0;

// setInterval(() => {
//     publish('message',  counter);
//     counter++;
// }, 2000);

const emitter = require('./observer');

let counter = 0;

setInterval(() => {
    emitter.emit('message', counter);
    counter++;
}, 2000);