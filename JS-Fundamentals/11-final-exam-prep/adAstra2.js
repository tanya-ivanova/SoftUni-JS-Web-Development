function solve(input) {
    let pattern = /([#|])([a-zA-Z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
    let foods = [];
    let totalCalories = 0;

    let match = pattern.exec(input[0]);

    while(match !== null) {        
        let foodName = match[2];
        let expirationDate = match[3];
        let calories = Number(match[4]);
        totalCalories += calories;
        let food = {
            foodName,
            expirationDate,
            calories
        }
        foods.push(food);

        match = pattern.exec(input[0]);
    }
    
    let days = Math.floor(totalCalories / 2000);
    
    console.log(`You have food to last you for: ${days} days!`);

    foods.forEach(f => console.log(`Item: ${f.foodName}, Best before: ${f.expirationDate}, Nutrition: ${f.calories}`));
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);