function counterStrike(input) {
    let energy = Number(input.shift());
    let battlesWon = 0;
    let isGameFinished = false;
    
    while(input[0] !== "End of battle") {
        let distance = Number(input.shift());
        
        if (energy - distance < 0) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            isGameFinished = true;
            break;
        } else {
            battlesWon++;
            energy -= distance;
        }

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
        }
    }
    if (!isGameFinished) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"74",
"10"]);