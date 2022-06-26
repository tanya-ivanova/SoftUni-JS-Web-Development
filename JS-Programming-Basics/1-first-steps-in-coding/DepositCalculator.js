function calculateDeposit(input) {
    let depositedSum = Number(input[0]);
    let duration = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interest = depositedSum * (annualInterestRate / 100);
    let interestPerMonth = interest / 12;
    let sum = depositedSum + duration * interestPerMonth;

    console.log(sum);
}

calculateDeposit(["2350",
"6 ",
"7 "])