function triangleOfNumbers(num) {
    for(i = 1; i <= num; i++) {
        let printLine = "";
        for(j = 1; j <= i; j++) {
            printLine = printLine + i + " ";            
        }
        console.log(printLine);
    }
}

triangleOfNumbers(5);