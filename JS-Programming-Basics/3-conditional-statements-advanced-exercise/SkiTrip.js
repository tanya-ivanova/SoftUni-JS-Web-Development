function whatIsThePriceOfSkiTrip(input) {
    let days = Number(input[0]) - 1;
    let roomType = input[1];
    let evaluation = input[2];

    let price = 0;

    if (roomType === "room for one person") {
        price = days * 18.00;        
    } else if (roomType === "apartment") {
        price = days * 25.00;
        if (days < 10) {
            price = price * 0.70;
        } else if ((days >=10) && (days <= 15)) {
            price = price * 0.65;
        } else if (days > 15) {
            price = price * 0.50;
        }
    } else if (roomType === "president apartment") {
        price = days * 35.00;
        if (days < 10) {
            price = price * 0.90;
        } else if ((days >=10) && (days <= 15)) {
            price = price * 0.85;
        } else if (days > 15) {
            price = price * 0.80;
        }
    }
    if (evaluation === "positive") {
        price = price * 1.25;
    } else if (evaluation === "negative") {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}

whatIsThePriceOfSkiTrip(["2",
"apartment",
"positive"])
