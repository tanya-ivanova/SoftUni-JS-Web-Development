function primeNumberChecker (number) {
    let isPrime = true;

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime && number > 1) {
        console.log("true");
    } else {
        console.log("false");
    }
}

primeNumberChecker(7);
primeNumberChecker(10);
primeNumberChecker(1);
primeNumberChecker(0);
primeNumberChecker(11);