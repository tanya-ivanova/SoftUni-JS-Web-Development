function simpleCalculator2 (num1, num2, operator) {
    switch (operator) {
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
    }

    function multiply (num1, num2) {
        console.log(num1 * num2);
    }

    function divide (num1, num2) {
        console.log(num1 / num2);
    }

    function add (num1, num2) {
        console.log(num1 + num2);
    }

    function subtract (num1, num2) {
        console.log(num1 - num2);
    }

}

simpleCalculator2(5,
    5,
    'multiply');