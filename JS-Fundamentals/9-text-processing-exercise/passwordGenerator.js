function passwordGenerator (input) {
    let [firststr, secondstr, word] = input;
    let str = `${firststr}${secondstr}`;
    
    let vowels = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u",        
    }

    let password = [];
    let wordIndex = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = word[wordIndex % word.length];

        if (str[i] === vowels[str[i]]) {
            password.push(currentChar.toUpperCase());
            wordIndex++;
        } else {
            password.push(str[i]);
        }
        
    }

    console.log(`Your generated password is ${password.reverse().join("")}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);