function solve (input) {
    let pattern = /([=/])([A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];

    let match = pattern.exec(input);
    while(match !== null) {
        destinations.push(match[2]);
        match = pattern.exec(input);
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);

    let travelPoints = 0;
    destinations.forEach(d => {
        travelPoints += d.length;
    })
    console.log(`Travel Points: ${travelPoints}`);
}

solve("ThisIs some InvalidInput");