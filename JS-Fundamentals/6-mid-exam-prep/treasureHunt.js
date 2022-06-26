function treasureHunt (input) {
    let chest = input.shift().split("|");
    
    while(input[0] !== "Yohoho!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command === "Loot") {
            for (let i = 1; i < tokens.length; i++) {
                let loot = tokens[i];

                if (chest.indexOf(loot) === -1) {
                    chest.unshift(loot);
                }
            }
        } else if (command === "Drop") {
            let index = tokens[1];

            if ( index >= 0 && index < chest.length) {
                let loot = chest[index];
                chest.splice(index, 1);
                chest.push(loot);
            }
        } else if (command === "Steal") {
            let count = tokens[1];
            let stolenItems = chest.splice(-count);
            console.log(stolenItems.join(", "));
        }
        
    }
    let sumItemsLength = 0;

    for (item of chest) {
        sumItemsLength += item.length;
    }

    let averageTreasureGain = sumItemsLength / chest.length;

    if(chest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);