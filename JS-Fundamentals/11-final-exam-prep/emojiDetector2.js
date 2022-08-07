function solve(input) {
    let patternForEmojis = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let patternForDigits = /\d/g;
    
    let coolThreshold = input[0].match(patternForDigits).map(Number).reduce((prev, curr) => prev * curr, 1);
    
    let coolEmojis = [];
    let countValidEmojis = 0;

    let match = patternForEmojis.exec(input[0]);

    while(match !== null) {
        countValidEmojis++;
        let emoji = match[2];
        
        let asciiSum = 0;
        for(let char of emoji) {
            asciiSum += char.charCodeAt(0);
        }
        
        if(asciiSum >= coolThreshold) {
            coolEmojis.push(match[0]);
        }       

        match = patternForEmojis.exec(input[0]);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${countValidEmojis} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));    
}

solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
