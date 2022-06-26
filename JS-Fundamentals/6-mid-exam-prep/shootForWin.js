function shootForWin (input) {
    let targets = input.shift().split (" ").map(Number);
    let shotTargets = 0;
    
    while (input[0] !== "End") {
        let index = Number(input.shift());
        
        if (targets[index] === -1 || index < 0 || index > targets.length - 1) {
            continue;
        } else {
            let currentTarget = targets[index];
            targets[index] = -1;
            shotTargets++

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
        }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}

shootForWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);