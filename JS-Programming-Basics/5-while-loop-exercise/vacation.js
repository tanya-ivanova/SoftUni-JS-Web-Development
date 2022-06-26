function vacation(input) {
    let index = 0;
    let moneyNeededForVacation = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let daysCounter = 0;
    let spendCounter = 0;
    let savedMoney = availableMoney;

    while(savedMoney < moneyNeededForVacation) {
        let command = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        daysCounter++;

        if (command === "save") {
            savedMoney = savedMoney + money;
            spendCounter = 0;
        } else if (command === "spend") {
            spendCounter++;
            if (spendCounter === 5) {
                console.log("You can't save the money.");
                console.log(daysCounter);
                break;
            }
            if (money > savedMoney) {
                savedMoney = 0;
            } else {
                savedMoney = savedMoney - money;
            }            
        }
    }
    if (savedMoney >= moneyNeededForVacation) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);