function solve(input) {
    let numbers = input.split(" ").map(Number);
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    let average = sum / numbers.length;

    let result = [];

    for (let number of numbers) {
        if (number > average) {
            result.push(number);
        }
    }
    result.sort((a, b) => b - a);

    if (result.length === 0) {
        console.log("No");
    } else {
        let finalResultForPrint = result.slice(0, 5);
        console.log(finalResultForPrint.join(" "));
    }
}

solve('-1 -2 -3 -4 -5 -6');