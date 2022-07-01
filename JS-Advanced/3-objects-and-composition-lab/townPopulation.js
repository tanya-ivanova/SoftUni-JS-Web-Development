function townPopulation (input) {
 const towns = {};

 for (let line of input) {
    let [town, population] = line.split(' <-> ');
    population = Number(population);
    
    // if (!towns.hasOwnProperty(town)) {
    //     towns[town] = population;
    // } else {
    //     towns[town] += population;
    // }
    if (towns.hasOwnProperty(town)) {
        population += towns[town];
    }
    towns[town] = population;
 }

 for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
 }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);