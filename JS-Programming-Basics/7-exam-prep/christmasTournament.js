function solve(input) {
    let days = Number(input.shift());
    let daysWin = 0;
    let daysLose = 0;
    let totalMoney = 0;

    for(let i = 0; i < days; i++) {
        let wins = 0;
        let loses = 0;
        let moneyPerDay = 0;
        while(input[0] !== 'Finish') {
            let game = input.shift();
            let result = input.shift();

            if(result === 'win') {
                wins++;
                moneyPerDay += 20;
            } else {
                loses++;
            }
        }

        if(wins > loses) {
            daysWin++;
            totalMoney = totalMoney + moneyPerDay * 1.1;
        } else {
            daysLose++;
            totalMoney = totalMoney + moneyPerDay;
        }

        input.shift();
    }

    if(daysWin > daysLose) {
        totalMoney = totalMoney * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

solve(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);
