function test () {
    let word = "orange";
    for (let i = 0; i < word.length * 2; i++) {
        let currentChar = word[i % word.length];
        console.log(currentChar);
    }
}

test();