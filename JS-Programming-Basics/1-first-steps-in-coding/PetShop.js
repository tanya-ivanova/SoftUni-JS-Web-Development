function calculatePetFoodMoney(input) {
    let dogFoodPackNumber = Number(input[0]);
    let catFoodPackNumber = Number(input[1]);
    let dogFoodPrice = dogFoodPackNumber * 2.50;
    let catFoodPrice = catFoodPackNumber * 4;
    let totalPrice = dogFoodPrice + catFoodPrice;
    console.log(`${totalPrice} lv.`);
}

calculatePetFoodMoney(["13", "9"]);