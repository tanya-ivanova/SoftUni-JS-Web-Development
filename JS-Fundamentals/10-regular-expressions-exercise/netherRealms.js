function netherRealms (input) {
    let patternForNumbers = /[+-]*\d+\.*\d*/g;
    let patternForNames = /(.+?)(,|$)/g;

    let names = [];
    let matchName = patternForNames.exec(input);

    while(matchName !== null) {
        names.push(matchName[1].trim());
        matchName = patternForNames.exec(input);
    }
    names.sort((a, b) => a.localeCompare(b));
    
    let demons = {};

    for (let name of names) {
        let health = 0;
        let damage = 0;        

        for (let i = 0; i < name.length; i++) {
            let asciiCode = name[i].charCodeAt(0);
            
            if ((!(asciiCode >= 48 && asciiCode <= 57)) && asciiCode !== 43 && asciiCode !== 45 && asciiCode !== 47
            && asciiCode !== 42 && asciiCode !== 46) {
                health += asciiCode;
            }
        }
        
        let matchNumbers = patternForNumbers.exec(name);

        while(matchNumbers !== null) {
            let number = Number(matchNumbers[0]);
            damage += number;
            matchNumbers = patternForNumbers.exec(name);
        }
        
        for (let char of name) {
            if (char === "*") {
                damage = damage * 2;
            } else if (char === "/") {
                damage = damage / 2;
            }
        }
        
        demons[name] = {
            health,
            damage
        }
    }
    
    let demonEntries = Object.entries(demons);
    
    for (let demonEntry of demonEntries) {
        //console.log(demonEntry);
        console.log(`${demonEntry[0]} - ${demonEntry[1].health} health, ${demonEntry[1].damage.toFixed(2)} damage`);
    }
    
}


netherRealms("Gos/ho");