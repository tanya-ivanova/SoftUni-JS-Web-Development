function solve(input) {
    let arrayOfNumbers = input.sort((a, b) => a - b).slice(0, 2).join(' ');
    console.log(arrayOfNumbers);
}

solve([30, 15, 50, 5]);