function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let initialPoints = Number(input[index]);
    index++;
    let numberAssessors = Number(input[index]);
    index++;
    let sum = initialPoints;
    let isNotEnough = true;

    for (let i = 1; i <= numberAssessors; i++) {
        let assessorName = input[index];
        index++;
        let points = input[index];
        index++;
        let nameLength = assessorName.length;
        sum = sum + ((nameLength * points) / 2);

        if (sum > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${sum.toFixed(1)}!`);
            isNotEnough = false;
            break;
        }
    }
    if(isNotEnough) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - sum).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);