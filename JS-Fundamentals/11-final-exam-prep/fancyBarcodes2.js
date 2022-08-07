function solve(input) {
    let pattern = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/;
    
    let countOfBarcodes = input.shift();    

    for (let i = 0; i < countOfBarcodes; i++) {
        let barcode = input[i];
        let match = pattern.exec(barcode);        

        if(match === null) {
            console.log('Invalid barcode');
        } else {            
            let validBarcode = match[1];
            let patternForDigits = /\d+/g;
            let matchDigits = validBarcode.match(patternForDigits);
                        
            if (matchDigits !== null) {
                matchDigits = matchDigits.join("");
                console.log(`Product group: ${matchDigits}`);
            } else {
                console.log("Product group: 00");
            }
        }
    }
}

solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
