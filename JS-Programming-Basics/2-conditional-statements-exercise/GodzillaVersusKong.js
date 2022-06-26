function isMoneyEnoughForFilming(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothes = Number(input[2]);

    let decorPrice = budget * 0.1;
    let clothePrice = statists * clothes;

    if (statists > 150) {
        clothePrice = clothePrice * 0.9
    }

    if ((decorPrice + clothePrice) > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decorPrice + clothePrice) - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - (decorPrice + clothePrice)).toFixed(2)} leva left.`);
    }
}

isMoneyEnoughForFilming(["9587.88",
"222",
"55.68"]);