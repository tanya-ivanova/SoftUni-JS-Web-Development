function muOnline (input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split("|");
    let bestRoom = 0;
    let youDied = false;
    
    for (let room of rooms) {
        let [command, number] = room.split(" ");
        number = Number(number);
        bestRoom++;

        if (command === "potion") {
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
        } else if (command === "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            let monster = command;
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                youDied = true;
                break;
            }
        }
    }
    if(!youDied) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");