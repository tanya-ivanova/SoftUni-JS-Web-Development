function starEnigma (input) {
    let numberOfMessages = input.shift();
    let star = ["s", "t", "a", "r"];
    let planets = {};
    
    for (let i = 0; i < numberOfMessages; i++) {
        let encryptedMessage = input[i];
        let counter = 0;
        let decryptedMessage = "";

        for (let char of encryptedMessage) {
            if(star.includes(char.toLowerCase())) {
                counter++;
            }
        }
        
        for (let char of encryptedMessage) {
            let code = char.charCodeAt(0) - counter;
            let newChar = String.fromCharCode(code);
            decryptedMessage += newChar;
        }
        
        let pattern = /[^@\-!:>]*@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([A\|D])![^@\-!:>]*->(\d+)/g;
        let match = pattern.exec(decryptedMessage);

        while(match !== null) {
            let name = match[1];
            let planetState = match[3];
            planets[name] = planetState;
            match = pattern.exec(decryptedMessage);
        }
    }    
    let sorted = Object.entries(planets);
    sorted.sort((a, b) => a[1] - b[1]);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    let counterAttacked = 0;
    let counterDestroyed = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let planet of sorted) {
        if(planet[1] === "A") {
            counterAttacked++;
            attackedPlanets.push(planet[0]);
        } else {
            counterDestroyed++;
            destroyedPlanets.push(planet[0]);
        }        
    }    
    console.log(`Attacked planets: ${counterAttacked}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${counterDestroyed}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`));
}

starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);