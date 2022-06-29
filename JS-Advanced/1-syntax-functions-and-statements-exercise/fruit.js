function fruit (fruit, grams, price) {
    let kilograms = grams / 1000;
    let moneyNeeded = kilograms * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);