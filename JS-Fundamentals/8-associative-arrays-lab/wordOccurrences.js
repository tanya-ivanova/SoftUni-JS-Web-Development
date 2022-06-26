function wordOccurrences (input) {
    let wordsObj = {};

    for (let word of input) {
        if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = 1;
        } else {
            let counter = wordsObj[word];
            wordsObj[word] = counter + 1;
        }
    }
    let wordsArr = Object.entries(wordsObj);
    wordsArr.sort((a, b) => b[1] - a[1]);
    
    for (let wordCounter of wordsArr) {
        console.log(`${wordCounter[0]} -> ${wordCounter[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);