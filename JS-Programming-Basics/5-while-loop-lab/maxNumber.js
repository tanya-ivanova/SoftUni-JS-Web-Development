function maxNumber(input) {
    let index = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    while(input[index] !== "Stop") {
        let num = Number(input[index]);
        index++;
        if (num > maxNum) {
            maxNum = num;
        }
    }
    console.log(maxNum);
}

maxNumber(["45",
"-20",
"7",
"99",
"Stop"]);