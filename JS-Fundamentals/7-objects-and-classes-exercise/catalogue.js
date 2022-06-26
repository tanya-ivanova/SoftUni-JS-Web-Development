function catalogue (input) {
    let catalogue = {};

    for (let line of input) {
        line = line.split(" : ");      
        catalogue[line[0]] = Number(line[1]);       
    }
    let sortedCatalogue = {};

    for (let key of Object.keys(catalogue).sort((a, b) => a.localeCompare(b))) {
        sortedCatalogue[key] = catalogue[key];
    }
    let keys = Object.keys(sortedCatalogue);
    let firstLetter = keys[0][0];    
    
    for (let i = 0; i < keys.length; i++) {
        if(keys[i][0] === firstLetter) {
            if(i !== 0) {
                if(keys[i][0] !== keys[i - 1][0]) {
                    console.log(firstLetter);
                }
            } else {
                console.log(firstLetter);
            }
        } else {
            firstLetter = keys[i].charAt(0);
            if(keys[i].charAt(0) !== keys[i - 1].charAt(0)) {
                console.log(firstLetter);
            }
        }
        console.log(`  ${keys[i]}: ${sortedCatalogue[keys[i]]}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);