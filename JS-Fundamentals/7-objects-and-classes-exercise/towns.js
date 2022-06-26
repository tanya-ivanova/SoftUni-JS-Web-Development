function towns (input) {
    let towns = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" | ");
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
        let tableRow = {
            town,
            latitude,
            longitude
        }
        towns.push(tableRow);
    }
    //towns.forEach(x => console.log(`town: ${x.town}, latitude: ${x.latitude}, longitude: ${x.longitude}`));
    for (let el of towns) {
        console.log(el);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);