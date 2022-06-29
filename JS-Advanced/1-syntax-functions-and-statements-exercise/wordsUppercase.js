function wordsUppercase(str) {
    let pattern = /(\w+)/g;

    let words = str.match(pattern);

    let result = [];

    for (let word of words) {
        result.push(word.toUpperCase());
    }

    console.log(result.join(', '));

}

wordsUppercase('Hi, how are you?');

