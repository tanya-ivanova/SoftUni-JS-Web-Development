function specialNumbers (num) {
    for (let i = 1; i <= num; i++) {
        let numAsString = String(i);
        let sum = 0;
        
        for (let j = 0; j < numAsString.length; j++) {
            sum = sum + Number(numAsString[j]);   
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);