function fancyBarcodes(input) {
    let pattern = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/;

    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let barcode = input[i];

        let match = pattern.exec(barcode);

        if (match === null) {
            console.log("Invalid barcode");
        } else {
            let validBarcode = match[1];
            let digitPattern = /\d+/g;
            let productGroup = validBarcode.match(digitPattern);
            
            if (productGroup !== null) {
                productGroup = productGroup.join("");
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log("Product group: 00");
            }
        }
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);