function wordsTracker (input) {
    let searchWords = {};
    let tokens = input.shift().split(" ");
    
    for (let word of tokens) {
        searchWords[word] = 0;        
    }
    
    for (let word of tokens) {
        for (let searchedWord of input) {
            if(searchedWord === word) {
                let counter = searchWords[word];
                searchWords[word] = counter + 1;
            }
        }
    }
    let sorted = Object.entries(searchWords);
    sorted.sort((a, b) => b[1] - a[1]);

    sorted.forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);