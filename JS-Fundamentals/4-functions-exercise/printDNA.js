function printDNA (number) {
    let sequence = "ATCGTTAGGG";
    let sequenceIndex = 0;

    for (let i = 0; i < number; i++) {
        let currentIndex = i % 4;
        if (sequenceIndex === sequence.length) {
            sequenceIndex = 0;
        }
        if (currentIndex === 0) {
            console.log("**" + sequence[sequenceIndex++] + sequence[sequenceIndex++] + "**");
        } else if (currentIndex === 1 || currentIndex === 3) {
            console.log("*" + sequence[sequenceIndex++] + "--" + sequence[sequenceIndex++] + "*");
        } else {
            console.log(sequence[sequenceIndex++] + "----" + sequence[sequenceIndex++]);
        }
    }
}

printDNA(10);