function solve(input) {
    let result = input.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse().join(' ');
    console.log(result);
}

solve([10, 15, 20, 25]);