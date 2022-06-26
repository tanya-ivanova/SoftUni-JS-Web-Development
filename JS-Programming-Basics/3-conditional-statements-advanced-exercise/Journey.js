function whereIsTheVacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let sleepingPlace = "";
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.30;
            sleepingPlace = "Camp"
        } else if (season === "winter") {
            price = budget * 0.70;
            sleepingPlace = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            price = budget * 0.40;
            sleepingPlace = "Camp"
        } else if (season === "winter") {
            price = budget * 0.80;
            sleepingPlace = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe"
        sleepingPlace = "Hotel" 
        price = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${sleepingPlace} - ${price.toFixed(2)}`);
}

whereIsTheVacation(["50", "summer"])