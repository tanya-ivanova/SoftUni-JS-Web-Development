function manWar (input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());  
    let youWon = false;
    let youLost = false;  
    
    while(input[0] !== "Retire") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command === "Fire") {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    youWon = true;
                    console.log("You won! The enemy ship has sunken.");
                    break;
                }
            }
        } else if (command === "Defend") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);

            if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if(pirateShip[i] <= 0) {
                        youLost = true;
                        console.log("You lost! The pirate ship has sunken.");
                        break;
                    }
                }
            }
        } else if (command === "Repair") {
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);

            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += health;

                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (command === "Status") {
            let countRepairs = pirateShip.filter(x => x < maxHealth * 0.2);
            console.log(`${countRepairs.length} sections need repair.`);
        }
    }
    let sumPirateShip = pirateShip.reduce((previous, current) => (previous + current), 0);
    let sumWarShip = warShip.reduce((previous, current) => (previous + current), 0);

    if (!youLost && !youWon) {
        console.log(`Pirate ship status: ${sumPirateShip}`);
        console.log(`Warship status: ${sumWarShip}`);
    }
}

manWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);