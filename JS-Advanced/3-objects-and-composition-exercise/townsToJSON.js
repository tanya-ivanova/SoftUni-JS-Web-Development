function solve (input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(/\s*\|\s*/);
        const town = tokens[1];
        let latitude = Number(tokens[2]);
        let longitude = Number(tokens[3]);

        let obj = {
            Town: town,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2))
        }

        towns.push(obj);
    }
    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);