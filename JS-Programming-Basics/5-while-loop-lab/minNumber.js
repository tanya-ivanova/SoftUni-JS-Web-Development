function minNumber(input) {
    let index = 0;
    let min = Number.MAX_VALUE;

    while(input[index] !== "Stop") {
        let num = Number(input[index]);
        index++;

        if(num < min) {
            min = num;
        }
    }
    console.log(min);
}

minNumber(["45",
"-20",
"7",
"99",
"Stop"]);