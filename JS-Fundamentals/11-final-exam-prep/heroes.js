function heroes (input) {
    let heroesNumber = input.shift();
    let heroesObj = {};

    for (let i = 0; i < heroesNumber; i++)
    {
        let [name, hitPoints, manaPoints] = input.shift().split(" ");
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        heroesObj[name] = {
            hitPoints,
            manaPoints
        }
    }
    
    while(input[0] !== "End") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];

        if (command === "CastSpell") {
            let name = tokens[1];
            
            let neededManaPoints = Number(tokens[2]);
            let spellName = tokens[3];

            if (heroesObj[name].manaPoints >= neededManaPoints) {
                heroesObj[name].manaPoints -= neededManaPoints;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroesObj[name].manaPoints} MP!`);

            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === "TakeDamage") {
            let name = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            heroesObj[name].hitPoints -= damage;

            if(heroesObj[name].hitPoints > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name].hitPoints} HP left!`);

            } else {
                delete heroesObj[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        } else if (command === "Recharge") {
            let name = tokens[1];
            let amount = Number(tokens[2]);
            let currentManaPoints = heroesObj[name].manaPoints;
            heroesObj[name].manaPoints += amount;

            if (heroesObj[name].manaPoints > 200) {
                heroesObj[name].manaPoints = 200;
                let amountRecovered = 200 - currentManaPoints;
                console.log(`${name} recharged for ${amountRecovered} MP!`);
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (command === "Heal") {
            let name = tokens[1];
            let amount = Number(tokens[2]);
            let currentHitPoints = heroesObj[name].hitPoints;
            heroesObj[name].hitPoints += amount;

            if (heroesObj[name].hitPoints > 100) {
                heroesObj[name].hitPoints = 100;
                let amountRecovered = 100 - currentHitPoints;
                console.log(`${name} healed for ${amountRecovered} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    }
    let heroesAsArray = Object.entries(heroesObj);
    for (let hero of heroesAsArray) {
        console.log(hero[0]);
        let points = Object.entries(heroesObj[hero[0]]);
        console.log(`  HP: ${points[0][1]}`);
        console.log(`  MP: ${points[1][1]}`);
    }
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]
  );
  console.log("---");
  heroes([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]);