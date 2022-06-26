function simpleCalculator (num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case "multiply":
            result = (num1, num2) => num1 * num2;
            break;
        case "divide":
            result = (num1, num2) => num1 / num2;
            break;
        case "add":
            result = (num1, num2) => num1 + num2;
            break;
        case "subtract":
            result = (num1, num2) => num1 - num2;
            break;
    }

    console.log(result(num1, num2));
}

simpleCalculator(40,
    8,
    'divide');

