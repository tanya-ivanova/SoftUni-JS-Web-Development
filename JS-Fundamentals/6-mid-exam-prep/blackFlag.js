function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let targetPlunder = Number(input[2]);
    let gatheredPlunder = 0

    for (let i = 1; i <= days; i++) {
        gatheredPlunder += dailyPlunder;

        if (i % 3 === 0) {
            gatheredPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            gatheredPlunder -= gatheredPlunder * 0.3;
        }
    }
    if(gatheredPlunder >= targetPlunder) {
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (gatheredPlunder / targetPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"]);