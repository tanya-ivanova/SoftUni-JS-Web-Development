function bossRush(input) {
    let regexPattern = /\|([A-Z]{4,})\|:#([A-Za-z]+\s[A-Za-z]+)#/;

    let numberOfInputElements = Number(input.shift());

    for(let i = 0; i < numberOfInputElements; i++) {
        let inputElement = input[i];
        let match = regexPattern.test(inputElement);

        if(match) {
            let validMatch = regexPattern.exec(inputElement);
            let bossName = validMatch[1];
            let bossTitle = validMatch[2];

            console.log(`${bossName}, The ${bossTitle}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${bossTitle.length}`);

        } else {
            console.log('Access denied!');
        }
        
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);
