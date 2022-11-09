const {print, add, data} = require('./util');

print('Hello world! ' + add(3, 5));

console.log(data[1]);

const url = new URL('http://localhost:3000/catalog?page=3');
console.log(url);
