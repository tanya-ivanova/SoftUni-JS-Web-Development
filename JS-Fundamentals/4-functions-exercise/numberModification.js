function numberModification (number) {
    let numberAsString = number.toString();
    let sum = 0;
    
    while (true) {
        for (let i = 0; i < numberAsString.length; i++) {
            let num = Number(numberAsString[i]);
            sum += num;
        }   
        if (sum / numberAsString.length <= 5) {
            numberAsString += "9";
            sum = 0;
        } else {
            break;
        }
    }
    console.log(numberAsString);
}

numberModification(5835);