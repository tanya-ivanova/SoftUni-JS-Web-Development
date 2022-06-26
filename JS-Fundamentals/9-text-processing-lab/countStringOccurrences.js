function countStringOccurrences(text, word) {
    let counter = text.split(" ").filter(x => x === word).length;
    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',
'is');