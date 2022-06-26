function destinationMapper (str) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let validLocations = [];

    let match = pattern.exec(str);
    while(match !== null) {
        validLocations.push(match[2]);
        match = pattern.exec(str);
    }

    let travelPoints = 0;

    for(let location of validLocations) {
        travelPoints += location.length;
    }
    console.log(`Destinations: ${validLocations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("ThisIs some InvalidInput");