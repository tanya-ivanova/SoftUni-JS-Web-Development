function decimalToBinary (number) {    
    let remainders = [];
            
    while (number > 0) {
        remainders.push(number % 16);
        number = Math.floor(number / 16);        
    }  
    
    for (let i = 0; i < remainders.length; i++) {
        let remainder = remainders[i];

        if (remainder === 10) {
            remainder = 'A';            
        }
        if (remainder === 11) {
            remainder = 'B';            
        }
        if (remainder === 12) {
            remainder = 'C';
        } if (remainder === 13) {
            remainder = 'D';
        }
        if (remainder === 14) {
            remainder = 'E';
        }
        if (remainder === 15) {
            remainder = 'F';
        }
        remainders.splice(i, 1, remainder);
    }
    let hexadecimal = remainders.reverse().join('');

    console.log(hexadecimal);
}

decimalToBinary(5386);