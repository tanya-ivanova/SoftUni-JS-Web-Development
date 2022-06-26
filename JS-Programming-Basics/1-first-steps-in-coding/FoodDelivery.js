function calculateFoodPrice(input) {
    let chickenPrice = Number(input[0]) * 10.35;
    let fishPrice = Number(input[1]) * 12.40;
    let veganPrice = Number(input[2]) * 8.15;

    let desssertPrice = (chickenPrice + fishPrice + veganPrice) * 0.20;
    let finalSum = chickenPrice + fishPrice + veganPrice + desssertPrice + 2.50;
    console.log(finalSum);
}

calculateFoodPrice(["9 ",
"2 ",
"6 "]);