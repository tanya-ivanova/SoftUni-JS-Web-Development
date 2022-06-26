function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printCurrentLine = "";
    let isEqual = false;

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;
        for (j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                sumEven = sumEven + currentDigit;
            } else {
                sumOdd = sumOdd + currentDigit;
            }            
        }
        if (sumEven === sumOdd) {
            printCurrentLine = printCurrentLine + i + " ";                
        }                        
    }
    console.log(printCurrentLine);
}

equalSumsEvenOddPosition(["299900",
"300000"]);