// const {subscribe} = require('./observer');

// let runningTotal = 0;

// subscribe('message', (data) => {
//     runningTotal += data;
//     console.log('current running total is ', runningTotal);
// })

const emitter = require('./observer');

let runningTotal = 0;

emitter.on('message', (data) => {
    runningTotal += data;
    console.log('current running total is ', runningTotal);
})