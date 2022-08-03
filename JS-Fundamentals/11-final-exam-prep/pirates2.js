function solve(input) {
    let towns = {};

    while(input[0] !== 'Sail') {
        let [townName, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);              

        if(!towns.hasOwnProperty(townName)) {
            towns[townName] = {
                population,
                gold
            }
        } else {
            towns[townName].population += population;
            towns[townName].gold += gold;
        }                
    }
    
    input.shift();

    while(input[0] !== 'End') {
        let [command, townName, ...tokkens] = input.shift().split('=>');
        
        if (command === 'Plunder') {
            let people = Number(tokkens[0]);
            let gold = Number(tokkens[1]);

            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            towns[townName].population -= people;
            towns[townName].gold -= gold;

            if (towns[townName].population === 0 || towns[townName].gold === 0) {
                delete towns[townName];
                console.log(`${townName} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            let gold = Number(tokkens[0]);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                towns[townName].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${towns[townName].gold} gold.`);
            }
        }
    }

    let existingTowns = Object.entries(towns);
    
    if(existingTowns.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${existingTowns.length} wealthy settlements to go to:`);
        existingTowns.forEach(t => console.log(`${t[0]} -> Population: ${t[1].population} citizens, Gold: ${t[1].gold} kg`));
    }
}

solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);