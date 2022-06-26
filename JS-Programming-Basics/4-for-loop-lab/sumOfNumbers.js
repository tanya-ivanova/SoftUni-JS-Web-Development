function sumOfNumbers(input) {
    let number = input[0];
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let num = Number(number[i]);
        sum = sum + num;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);