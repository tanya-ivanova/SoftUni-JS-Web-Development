function triplesLatinLetters (numAsString) {
    let num = Number(numAsString);
    let sequence = "";

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {    
                let letter1 = String.fromCharCode(97 + i);
                let letter2 = String.fromCharCode(97 + j);
                let letter3 = String.fromCharCode(97 + k);
                
                sequence = letter1 + letter2 + letter3;
                console.log(sequence);
            }
        }
    }
}

triplesLatinLetters("2");