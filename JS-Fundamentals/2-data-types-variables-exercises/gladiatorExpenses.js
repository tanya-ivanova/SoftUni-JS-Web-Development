function gladiatorExpenses (lostFigths, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetsBroken = 0;
    let swordsBroken = 0;
    let shieldsBroken = 0;
    let armorsBroken = 0;
    let expenses = 0;

    for (i = 1; i <= lostFigths; i++) {
        if (i % 2 === 0) {
            helmetsBroken++;
        }
        if (i % 3 === 0) {
            swordsBroken++;
        }
        if (i % 6 === 0) {
            shieldsBroken++;
        }
        if (i % 12 === 0) {
            armorsBroken++;
        }
    }
    expenses = helmetsBroken * helmetPrice + swordsBroken * swordPrice + shieldsBroken * shieldPrice + armorsBroken * armorPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5);