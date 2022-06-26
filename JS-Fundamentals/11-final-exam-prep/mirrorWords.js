function mirrorWords (input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let text = input[0];
    let counterValidPairs = 0;
    let mirrorWordsObj = {};    
    
    let regexMatch = pattern.exec(text);

    if (regexMatch) {
        while (regexMatch !== null) {
            counterValidPairs++;            
            let firstWord = regexMatch[2];
            let secondWordReversed = regexMatch[3];
            let secondWordAsArray = secondWordReversed.split("").reverse();
            let secondWord = secondWordAsArray.join("");
            
            if (firstWord === secondWord) {
                mirrorWordsObj[firstWord] = secondWordReversed;
            }

            regexMatch = pattern.exec(text);
        }
        
        console.log(`${counterValidPairs} word pairs found!`);

    } else {
        console.log("No word pairs found!");
    }

    let mirrorWordsArray = Object.entries(mirrorWordsObj);

    if(mirrorWordsArray.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWordsArray.map(x => x.join(" <=> ")).join(", "));
    }
}

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
console.log("---");
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);