function walking(input) {
    let index = 0;
    let totalSteps = 0;

    while(totalSteps < 10000) {
        let steps = input[index];
        index++;
        if (steps !== "Going home") {
            steps = parseInt(steps);
            totalSteps = totalSteps + steps;
        } else {
            steps = Number(input[index]);
            index++;
            totalSteps = totalSteps + steps;
            break;
        }
    }
    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"]);