function solve(input) {
    let pattern = /([|#])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
    let totalCalories = 0;
    let result = [];

    let match = pattern.exec(input[0]);

    while(match !== null) {
        let item = match[2];
        let expirationDate = match[3];
        let calories = Number(match[4]);

        totalCalories += calories;

        let outputString = `Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}`;
        result.push(outputString);

        match = pattern.exec(input[0]);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    console.log(result.join('\n'));
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
