function solve(input) {
    let processorPrice = Number(input[0]);
    let videocardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let moneyNeeded = ((processorPrice * 1.57) * (1 - percentDiscount)) + ((videocardPrice * 1.57) * (1 - percentDiscount)) + ((ramPrice * 1.57) * ramCount);

    console.log(`Money needed - ${moneyNeeded.toFixed(2)} leva.`);
}

solve(["200",
"100",
"80",
"1",
"0.01"]);
