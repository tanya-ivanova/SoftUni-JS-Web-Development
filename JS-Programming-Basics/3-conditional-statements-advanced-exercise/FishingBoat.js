function isBudgetEnoughForFishing(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishermen = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        price = 3000;
    } else if ((season === "Summer") || (season === "Autumn")) {
        price = 4200;
    } else if (season === "Winter") {
        price = 2600;
    }

    if (numberOfFishermen <= 6) {
        price = price * 0.90;
    } else if ((numberOfFishermen >= 7) && (numberOfFishermen <= 11)) {
        price = price * 0.85;
    } else if (numberOfFishermen >=12) {
        price = price * 0.75;
    }

    if ((numberOfFishermen % 2 === 0) && (season === "Spring" || season === "Summer" || season === "Winter")) {
        price = price * 0.95;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

isBudgetEnoughForFishing(["2000",
"Winter",
"13"]);