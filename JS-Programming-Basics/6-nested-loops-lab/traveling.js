function traveling(input) {
    let index = 0;

    while(input[index] !== "End") {
        let destination = input[index];
        index++;
        let moneyNeeded = Number(input[index]);
        index++;
        let moneySaved = 0;
        while(moneySaved < moneyNeeded) {
            let money = Number(input[index]);
            index++;
            moneySaved = moneySaved + money;
        }
        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);