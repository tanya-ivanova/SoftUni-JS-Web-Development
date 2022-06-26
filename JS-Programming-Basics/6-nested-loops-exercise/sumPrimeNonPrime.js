function sumPrimeNonPrime(input) {
    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let isPrime = true;

    while(input[index] !== "stop") {
        let num = Number(input[index]);
        index++;

        if (num < 0) {
            console.log("Number is negative.");
            continue;            
        } else if (num === 0 || num === 1) {
            sumNonPrime = sumNonPrime + num;
            continue;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                   isPrime = false; 
                   break;                  
                }
            }
        }
        if (isPrime) {
            sumPrime = sumPrime + num;
        } else {
            sumNonPrime = sumNonPrime + num;
        }
        isPrime = true;        
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"]);