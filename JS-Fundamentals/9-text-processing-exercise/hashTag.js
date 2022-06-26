function hashTag(text) {
    text = text.split(" ");
    let specialWordsArr = [];

    for (let word of text) {
        if (word.startsWith("#")) {
            specialWordsArr.push(word);
        }
    }

    let specialWordsFinalArr = [];

    for (let word of specialWordsArr) {
        let containsOnlyLetters = true;
        for (let i = 1; i < word.length; i++) {
            if ((word.charCodeAt(i) < 65) || (word.charCodeAt(i) > 90 && word.charCodeAt(i) < 97) 
            || (word.charCodeAt(i) > 122)) {
                containsOnlyLetters = false;
                break;
            }
        }
        if(containsOnlyLetters && word !== "#") {
            specialWordsFinalArr.push(word);
        }
    }

    for (let word of specialWordsFinalArr) {
        let currentWord = word.substring(1);
        console.log(currentWord);
    }
}

hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');