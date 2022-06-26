function muOnline2 (input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split("|");
    let bestRoom = 0;  
        
    for (let room of rooms) {
        let [command, number] = room.split(" ");
        number = Number(number);
        bestRoom++;

        if (command === "potion") {
            health = potion(health, number);
        } else if (command === "chest") {
            bitcoins = chest(bitcoins, number);
        } else {
            health = monster(command, health, number, bestRoom);
            if (health <= 0) {
                break;
            }
        }
    }
    if(health > 0 ) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

    function potion (health, number) {
        let currentHealth = health;
        health += number;
        if(health > 100) {
            let healAmount = 100 - currentHealth;
            health = 100;
            console.log(`You healed for ${healAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        return health;
    }

    function chest(bitcoins, number) {
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
        return bitcoins;
    }

    function monster (command, health, number, bestRoom) {
        let monster = command;
        health -= number;

        if (health > 0) {
            console.log(`You slayed ${monster}.`);
        } else {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${bestRoom}`);                                           
        }
        return health;
    }
}

muOnline2("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");