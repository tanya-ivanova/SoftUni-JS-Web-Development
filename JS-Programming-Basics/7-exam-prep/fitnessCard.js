function solve(input) {
    let moneyAvailable = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let moneyNeeded = 0;

    if(gender === 'm') {
        if(sport === 'Gym') {
            moneyNeeded = 42;

            if(age <= 19) {
                moneyNeeded = 42 * 0.8;
            }
        } else if(sport === 'Boxing') {
            moneyNeeded = 41;

            if(age <= 19) {
                moneyNeeded = 41 * 0.8;
            }
        } else if(sport === 'Yoga') {
            moneyNeeded = 45;

            if(age <= 19) {
                moneyNeeded = 45 * 0.8;
            }
        } else if(sport === 'Zumba') {
            moneyNeeded = 34;

            if(age <= 19) {
                moneyNeeded = 34 * 0.8;
            }
        } else if(sport === 'Dances') {
            moneyNeeded = 51;

            if(age <= 19) {
                moneyNeeded = 51 * 0.8;
            }
        } else if(sport === 'Pilates') {
            moneyNeeded = 39;

            if(age <= 19) {
                moneyNeeded = 39 * 0.8;
            }
        }
    } else if(gender === 'f') {
        if(sport === 'Gym') {
            moneyNeeded = 35;

            if(age <= 19) {
                moneyNeeded = 35 * 0.8;
            }
        } else if(sport === 'Boxing') {
            moneyNeeded = 37;

            if(age <= 19) {
                moneyNeeded = 37 * 0.8;
            }
        } else if(sport === 'Yoga') {
            moneyNeeded = 42;

            if(age <= 19) {
                moneyNeeded = 42 * 0.8;
            }
        } else if(sport === 'Zumba') {
            moneyNeeded = 31;

            if(age <= 19) {
                moneyNeeded = 31 * 0.8;
            }
        } else if(sport === 'Dances') {
            moneyNeeded = 53;

            if(age <= 19) {
                moneyNeeded = 53 * 0.8;
            }
        } else if(sport === 'Pilates') {
            moneyNeeded = 37;

            if(age <= 19) {
                moneyNeeded = 37 * 0.8;
            }
        }
    }

    if(moneyAvailable >= moneyNeeded) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(moneyNeeded - moneyAvailable).toFixed(2)} more.`);
    }
}

solve(["10",
"m",
"50",
"Pilates"]);
