function solve(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());

    let totalEatenFood = 0;
    let totalEatenDogFood = 0;
    let totalEatenCatFood = 0;
    let totalEatenBiscuits = 0;
    let counterDays = 0;

    for(let i = 0; i < days * 2; i += 2) {
        counterDays++;
        let dogFoodPerDay = Number(input[i]);
        let catFoodPerDay = Number(input[i + 1]);

        let eatenFoodPerDay = dogFoodPerDay + catFoodPerDay;
        totalEatenFood += eatenFoodPerDay;
        totalEatenDogFood += dogFoodPerDay;
        totalEatenCatFood += catFoodPerDay;

        if(counterDays % 3 === 0) {
            let biscuits = eatenFoodPerDay * 0.1;
            totalEatenBiscuits += biscuits;
        }
    }

    let percentEatenFood = (totalEatenFood / totalFood) * 100;
    let percentEatenFoodByDog = (totalEatenDogFood / totalEatenFood) * 100;
    let percentEatenFoodByCat = (totalEatenCatFood / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFoodByCat.toFixed(2)}% eaten from the cat.`);
}

solve(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"]);