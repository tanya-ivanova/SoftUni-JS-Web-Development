function sumOfTwoNumbers(input) {
    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magicalNumber = Number(input[index]);
    index++;
    let combinationCounter = 0
    let isCombinationFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationCounter++;
            if (i + j === magicalNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicalNumber})`);
                isCombinationFound = true;
                break;
            }
        }
        if (isCombinationFound) {
            break;
        }
    }
    if (!isCombinationFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicalNumber}`);
    }
}

sumOfTwoNumbers(["23",
"24",
"20"]);