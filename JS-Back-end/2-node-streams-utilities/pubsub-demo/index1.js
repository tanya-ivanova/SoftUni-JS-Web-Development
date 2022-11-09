// require('./m1');
// require('./m2');
// require('./m3');

// process.stdin.on('data', (data) => {
//     console.log(data.toString());
// });

const result = [];

process.stdin.on('data', (chunk) => {
    result.push(chunk);
});

process.stdin.on('end', () => {
    console.log(result.join(''));
});