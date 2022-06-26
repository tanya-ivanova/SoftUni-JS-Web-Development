function isMoneyEnoughForVacation(input) {
    let vacationCost = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalMoney = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalNumber = puzzles + dolls + bears + minions + trucks;

    if (totalNumber >= 50) {
        totalMoney = totalMoney * 0.75;
    }

    totalMoney = totalMoney * 0.90;

    if (totalMoney >= vacationCost) {
        console.log(`Yes! ${(totalMoney - vacationCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationCost - totalMoney).toFixed(2)} lv needed.`)
    }
}

isMoneyEnoughForVacation(["320",
"8",
"2",
"5",
"5",
"1"]);