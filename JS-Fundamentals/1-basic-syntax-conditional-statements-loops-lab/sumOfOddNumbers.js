function sumOfOddNumbers (number) {
    let sum = 1;
    let totalSum = 0;

    for (let i = 1; i <= number; i++) {
        console.log(sum);
        totalSum = totalSum + sum;
        sum = sum + 2;
        
    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(5);