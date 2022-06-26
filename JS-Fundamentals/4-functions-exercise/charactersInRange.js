function charactersInRange (char1, char2) {
    let codeForChar1 = char1.charCodeAt(0);
    let codeForChar2 = char2.charCodeAt(0);
    let sequence = "";

    if (codeForChar1 < codeForChar2) {
        for (let i = codeForChar1 + 1; i < codeForChar2; i++) {
            let character = String.fromCharCode(i);
            sequence = sequence + character + " ";
        }
    } else {
        for (let i = codeForChar2 + 1; i < codeForChar1; i++) {
            let character = String.fromCharCode(i);
            sequence = sequence + character + " ";
        }
    }
    
    console.log(sequence);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#')