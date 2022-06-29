function solve(arr) {
    let sum = arr.reduce((accum, current) => accum + current, 0);
    console.log(sum);

    let sumInverse = arr.map(x => 1 / x).reduce((accum, current) => accum + current, 0);
    console.log(sumInverse);

    console.log(arr.join(''));
}

solve([1, 2, 3]);