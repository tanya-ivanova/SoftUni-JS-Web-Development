function print(message) {
    console.log('>>> ' + message);
}

function add(a, b) {
    return a + b;
}

function product(a, b) {
    return a * b;
}

const data = [1, 2, 3];

module.exports = {
    print,
    add,
    data
};