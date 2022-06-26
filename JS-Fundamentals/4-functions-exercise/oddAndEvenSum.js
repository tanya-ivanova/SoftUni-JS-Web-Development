function oddAndEvenSum (number) {
    let numberAsString = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let num = Number(numberAsString[i]);

        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(3495892137259234);