function accountBalance(input) {
    let index = 0;    
    let sum = 0;

    while(input[index] !== "NoMoreMoney") {
        let income = Number(input[index]);
        index++;
        if (income < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${income.toFixed(2)}`);
            sum = sum + income;
        }        
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"]);