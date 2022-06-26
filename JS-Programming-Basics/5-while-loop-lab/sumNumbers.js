function sumNumbers(input) {
    let index = 0;
    let initialNum = Number(input[index]);
    index++;
    let sum = 0

    while(true) {
        let num = Number(input[index]);
        index++;
        sum = sum + num;

        if (sum >= initialNum) {
            console.log(sum);
            break;
        }
    }
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);