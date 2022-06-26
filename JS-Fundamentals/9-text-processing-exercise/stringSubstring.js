function stringSubstring (word, text) {
    word = word.toLocaleLowerCase();    
    text = text.toLocaleLowerCase().split(" ");
        
    /*if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }*/
    let isPresent = false;
    for (let element of text) {
        if (element === word) {
            console.log(word);
            isPresent = true;
            break;
        }        
    }
    if(!isPresent) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');
console.log("---")
stringSubstring('python',
'JavaScript is the best programming language');