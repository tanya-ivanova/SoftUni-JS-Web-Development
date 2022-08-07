function heroRecruitment(input) {
    let heroesCollection = {};

    while(input[0] !== 'End') {
        let [command, heroName, spellName] = input.shift().split(' ');
        
        if(command === 'Enroll') {
            if(heroesCollection.hasOwnProperty(heroName)) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroesCollection[heroName] = [];
            }
        } else if(command === 'Learn') {
            if(!heroesCollection.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if(heroesCollection[heroName].includes(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                } else {
                    heroesCollection[heroName].push(spellName);
                }
            }
        } else if(command === 'Unlearn') {
            if(!heroesCollection.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if(heroesCollection[heroName].includes(spellName)) {
                    let indexOfSpell = heroesCollection[heroName].indexOf(spellName);
                    heroesCollection[heroName].splice(indexOfSpell, 1);
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }
            }
        }       
    }

    console.log('Heroes:');

    for(let hero in heroesCollection) {
        console.log(`== ${hero}: ${heroesCollection[hero].join(', ')}`);
    }
}

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Stefan Mana",
"Learn Mike Dispel",
"Learn Stefan Spell",
"Learn Peter Magic",
"Learn Peter Fury",
"Unlearn Bob Spell",
"Unlearn Stefan Spell",
"Unlearn Stefan Ball",
"End"]);
