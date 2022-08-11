function balls(input) {
    let n = Number(input[0]);
    let totalPoints = 0;
    let counterRedBalls = 0;
    let counterOrangeBalls = 0;
    let counterYellowBalls = 0;
    let counterWhiteBalls = 0;
    let counterBlackBalls = 0;
    let counterOtherBalls = 0;

    for(let i = 1; i <= n; i++) {
        let ball = input[i];

        if(ball === 'red') {
            totalPoints += 5;
            counterRedBalls++;
        } else if(ball === 'orange') {
            totalPoints += 10;
            counterOrangeBalls++;
        } else if(ball === 'yellow') {
            totalPoints += 15;
            counterYellowBalls++;
        } else if(ball === 'white') {
            totalPoints += 20;
            counterWhiteBalls++;
        } else if(ball === 'black') {
            totalPoints = Math.floor(totalPoints / 2);
            counterBlackBalls++;
        } else {
            counterOtherBalls++;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${counterRedBalls}`);
    console.log(`Orange balls: ${counterOrangeBalls}`);
    console.log(`Yellow balls: ${counterYellowBalls}`);
    console.log(`White balls: ${counterWhiteBalls}`);
    console.log(`Other colors picked: ${counterOtherBalls}`);
    console.log(`Divides from black balls: ${counterBlackBalls}`);
}

balls(["5",
"yellow",
"black",
"ddd",
"ddd",
"ddd"]);
