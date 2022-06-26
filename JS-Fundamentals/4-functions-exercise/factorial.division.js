function factorialDivision (num1, num2) {
    function factorial(num) {
        let result = 1;

        for (let i = num; i > 0; i -= 1) {
            result *= i;
        }
        return result;        
    }
    
    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);

    function division (a, b) {
        let result = a / b;
        return result;
    }

    console.log(division(factorial1, factorial2).toFixed(2));
}

factorialDivision(6, 2);