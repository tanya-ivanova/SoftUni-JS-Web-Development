function censoredWords (text, word) {
    let result = text.split(word);
    result = result.join("*".repeat(word.length));
    console.log(result);
}

censoredWords('A small sentence with some words', 'small');