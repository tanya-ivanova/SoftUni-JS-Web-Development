function solve(number) {
    let areDigitsTheSame = true;

    let numAsArray = ('' + number).split("").map(Number);
    
    for (let i = 0; i < numAsArray.length - 1; i++) {
        if (numAsArray[i] !== numAsArray[i + 1]) {
            areDigitsTheSame = false;
            break;
        }
    }

    let sum = numAsArray.reduce((accum, current) => accum + current, 0);

    console.log(areDigitsTheSame);
    console.log(sum);    
}

solve(2222222);
solve(1234);