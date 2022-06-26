function amazingNumber(num) {
    let sum = 0;
    let isAmazing = false;
    let numberAsString = String(num);
    
    for (let i = 0; i < numberAsString.length; i++) {
        sum = sum + Number(numberAsString[i]);
    }

    let sumAsString = String(sum);

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] === "9") {
            isAmazing = true;
        }
    }
    let output = isAmazing ? "True" : "False";

    console.log(`${num} Amazing? ${output}`);
}

amazingNumber("1233");