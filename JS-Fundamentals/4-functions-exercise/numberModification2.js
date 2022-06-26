function numberModification2 (number) {
    function numberToString (number) {
        let numberAsString = number.toString();
        return numberAsString
    }    

    function appendNumber (numberAsString) {
        return numberAsString += "9";
    }

    let numberAsString = numberToString(number);
    let sum = 0;
    
    while (true) {
        for (let i = 0; i < numberAsString.length; i++) {
            let num = Number(numberAsString[i]);
            sum += num;;
        }   
        if (sum / numberAsString.length <= 5) {
            numberAsString = appendNumber(numberAsString);
            sum = 0;
        } else {
            break;
        }
    }
    console.log(numberAsString);
}

numberModification2(101);