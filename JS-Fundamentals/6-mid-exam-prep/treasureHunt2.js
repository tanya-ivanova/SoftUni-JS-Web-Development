function solve(input) {
    let chest = input.shift().split("|");
    
    while (input[0] !== "Yohoho!") {
        let [command, ...params] = input.shift().split(" ");
        
        if (command === "Loot") {
            for (let treasure of params) {
                if(!chest.includes(treasure)) {
                    chest.unshift(treasure);
                }
            }
        } else if (command === "Drop") {
            let index = Number(params[0]);

            if (index >= 0 && index < chest.length) {
                let treasure = chest.splice(index, 1);
                chest.push(treasure[0]);
            }
        } else if (command === "Steal") {
            let count = Number(params[0]);
            let stolen = chest.splice(-count);
            console.log(stolen.join(", "));
        }
    }
    let sum = 0;
    for (let treasure of chest) {
        sum += treasure.length;
    }
    let averageTreasureGain = sum / chest.length;

    if (chest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
}

solve(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);