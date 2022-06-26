function processOddNumbers (arr) {
    console.log(arr.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25]);