function orders (food, quantity) {
    /*    • coffee - 1.50
    • water - 1.00
    • coke - 1.40
    • snacks - 2.00*/

    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let totalPrice = 0;

    switch (food) {
        case "coffee":
            totalPrice = coffeePrice * quantity;
            break;
        case "water":
            totalPrice = waterPrice * quantity;
            break;
        case "coke":
            totalPrice = cokePrice * quantity;
            break;
        case "snacks":
            totalPrice = snacksPrice * quantity;
            break;
    }

    console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);