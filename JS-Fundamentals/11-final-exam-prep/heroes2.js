function solve(input) {
    let heroes = {};
    let numberOfHeroes = input.shift();

    for(let i = 0; i < numberOfHeroes; i++) {
        let [name, hit, mana] = input.shift().split(' ');
        hit = Number(hit);
        mana = Number(mana);
        heroes[name] = {
            hit,
            mana
        }
    }

    while(input[0] !== 'End') {
        let [command, ...params] = input.shift().split(' - ');

        if(command === 'CastSpell') {
            let name = params[0];
            let manaNeeded = Number(params[1]);
            let spell = params[2];

            if(heroes[name].mana >= manaNeeded) {
                heroes[name].mana -= manaNeeded;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        } else if (command === 'TakeDamage') {
            let name = params[0];
            let damage = Number(params[1]);
            let attacker = params[2];

            heroes[name].hit -= damage;
            if(heroes[name].hit > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hit} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        } else if (command === 'Recharge') {
            let name = params[0];
            let manaRecharge = Number(params[1]);
            let manaRecovered = Math.min(manaRecharge, 200 - heroes[name].mana);
            heroes[name].mana += manaRecovered;
            console.log(`${name} recharged for ${manaRecovered} MP!`);
        } else if(command === 'Heal') {
            let name = params[0];
            let hitHeal = Number(params[1]);
            let hitRecovered = Math.min(hitHeal, 100 - heroes[name].hit);
            heroes[name].hit += hitRecovered;
            console.log(`${name} healed for ${hitRecovered} HP!`);
        }
    }

    for(let key in heroes) {
        console.log(key);
        console.log(`  HP: ${heroes[key].hit}`);
        console.log(`  MP: ${heroes[key].mana}`);
    }
}

solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
