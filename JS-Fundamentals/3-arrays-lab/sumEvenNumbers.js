function sumEvenNumbers (arrOfStrings) {
    let sum = 0;
    for (let el of arrOfStrings) {
        let num = Number(el);

        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);