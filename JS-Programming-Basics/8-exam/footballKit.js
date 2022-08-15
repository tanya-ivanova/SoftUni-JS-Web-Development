function solve(input) {
    let tshirtPrice = Number(input[0]);
    let moneyNeededForBall = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let bootsPrice = 2 * (tshirtPrice + shortsPrice);

    let moneySpent = (tshirtPrice + shortsPrice + socksPrice + bootsPrice) * 0.85;

    if(moneySpent >= moneyNeededForBall) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${moneySpent.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${(moneyNeededForBall - moneySpent).toFixed(2)} lv. more.`);
    }
}

solve(["59.99",
"500"]);
