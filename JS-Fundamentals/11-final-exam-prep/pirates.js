function solve (input) {
    let cities = {};

    while (input[0] !== "Sail") {
        let [name, population, gold] = input.shift().split("||");
        population = Number(population);
        gold = Number(gold);
        
        if (cities.hasOwnProperty(name)) {
            cities[name].population += population;
            cities[name].gold += gold;
        } else {
            cities[name] = {
                population,
                gold
            }
        }
    }
    input.shift();
    
    while (input[0] !== "End") {
        let [command, name, ...params] = input.shift().split("=>");
        
        if (command === "Plunder") {
            let people = Number(params[0]);
            let gold = Number(params[1]);

            console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            cities[name].population -= people;
            cities[name].gold -= gold;

            if (cities[name].population === 0 || cities[name].gold === 0) {
                delete cities[name];
                console.log(`${name} has been wiped off the map!`);
            }
        } else if (command === "Prosper") {
            let gold = Number(params[0]);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[name].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${name} now has ${cities[name].gold} gold.`);

            }
        }
    }
    let citiesAsArray = Object.entries(cities);

    if (citiesAsArray.length > 0) {
        console.log(`Ahoy, Captain! There are ${citiesAsArray.length} wealthy settlements to go to:`);

        for (let city of citiesAsArray) {
            //console.log(city);
            
            console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
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