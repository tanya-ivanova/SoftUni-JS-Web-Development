function adAstra (text) {
    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
    //let foods = {};
    let totalCalories = 0;
    //let text = input[0];
    let foodsArray = [];

    let match = pattern.exec(text);

    while(match !== null) {
        let name = match[2];
        let expiryDate = match[3];
        let calories = Number(match[4]);
        /*foods[name] = {
            expiryDate,
            calories
        }*/

        totalCalories += calories;
        let str = `Item: ${name}, Best before: ${expiryDate}, Nutrition: ${calories}`;
        foodsArray.push(str);
        
        match = pattern.exec(text);
    }

    let daysToLast = Math.trunc(totalCalories / 2000);
    
    console.log(`You have food to last you for: ${daysToLast} days!`);
    foodsArray.forEach(x => console.log(x));

    /*for (let food of Object.entries(foods)) {
        console.log(`Item: ${food[0]}, Best before: ${food[1].expiryDate}, Nutrition: ${food[1].calories}`);
    }*/
}

adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');