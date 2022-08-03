function getFibonator() {
    let fibonacci = [0, 1];    

    function nextFibonacciNumber() {        
        let nextNumber = fibonacci
        .slice(-2)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        fibonacci.push(nextNumber);

        return fibonacci[fibonacci.length - 2];        
    }
    return nextFibonacciNumber;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13