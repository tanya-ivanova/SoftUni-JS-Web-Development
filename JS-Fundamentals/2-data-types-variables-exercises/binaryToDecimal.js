function binaryToDecimal (binaryAsString) {
    let sum = 0;

    for (let i = binaryAsString.length; i > 0; i--) {
        let num = Number(binaryAsString[binaryAsString.length - i]);
        sum = sum + (num * Math.pow(2, i - 1));
    }

    console.log(sum);
}

binaryToDecimal("11110000");