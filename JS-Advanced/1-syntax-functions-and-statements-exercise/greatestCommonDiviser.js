function solve(num1, num2) {
    let minNumber = Math.min(num1, num2);

    let divisor;
    let greatestCommonDivisor = 1;

    for (let i = 1; i <= minNumber; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
        }
        if (divisor > greatestCommonDivisor) {
            greatestCommonDivisor = divisor;
        }
    }
    console.log(greatestCommonDivisor);
}

solve(15, 5);
solve(2154, 458);