function specialNumbers(input) {
    let num = Number(input[0]);
    let printLine = "";

    for (let i = 1111; i <= 9999; i++) {
        let counter = 0;
        for (let j = 0; j <= 3; j++) {
            i = i + "";
            let singleNumber = i.charAt(j);

            if (num % singleNumber === 0) {
                counter++;
            }
            if (counter === 4) {
                printLine = printLine + i + " ";
            }
        }
    }
    console.log(printLine);
}

specialNumbers(["16"]);