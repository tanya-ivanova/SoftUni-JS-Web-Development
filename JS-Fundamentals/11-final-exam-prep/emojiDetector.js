function solve(input) {
    let text = input[0];    
    let digitsMatch = /\d/g;
    let digits = text.match(digitsMatch);
    //console.log(digits);
    
    let threshold = 1;
    for (let digit of digits) {        
        threshold *= Number(digit);
    } 
    
    let pattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;

    let match = pattern.exec(text);
    let counter = 0;
    let coolEmojis = [];

    while(match !== null) {
        counter++;
        let emojiText = match[2];
        let coolness = 0;
        for(let char of emojiText) {
            let code = char.charCodeAt(0);
            coolness += code;
        }
        
        if (coolness >= threshold) {
            coolEmojis.push(match[0]);
        }
        
        match = pattern.exec(text);
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(x => console.log(x));
}

solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);