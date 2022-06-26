function addAndSubtract (num1, num2, num3) {
    function sum (num1, num2) {
        return num1 + num2;
    }

    function subtract (num3) {
        let result = sum(num1, num2) - num3;
        console.log(result);
    }
    subtract(num3);
}

addAndSubtract(1,
    17,
    30);