function solve(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let time = (distance * secondsPerMeter) + (Math.floor(distance/50) * 30);

    if(time < record) {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}

solve(["5554.36",
"1340",
"3.23"]);