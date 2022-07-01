function solve (input) {
    let catalogue = {};

    input.forEach(element => {
        let [name, price] = element.split(' : ');
        price = Number(price);
        catalogue[name] = price;
    });

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(sortedCatalogue);

    let firstLetter = sortedCatalogue[0][0][0];
    console.log(firstLetter);
    
    for (let entry of sortedCatalogue) {
        if (entry[0][0] !== firstLetter) {
            firstLetter = entry[0][0];
            console.log(firstLetter);
        }
        console.log(`  ${entry[0]}: ${entry[1]}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);