function dictionery2 (input) {
    let dictionery = {};

    for (let obj of input) {
        obj = JSON.parse(obj);
        let entry = Object.entries(obj)[0];
        dictionery[entry[0]] = entry[1];        
    }
    
    let sortedDictionery = {};

    for (let key of Object.keys(dictionery).sort((a, b) => a.localeCompare(b))) {
        sortedDictionery[key] = dictionery[key];
    }

    for (let key of Object.keys(sortedDictionery)) {
        let term = key;
        let definition = sortedDictionery[key];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

dictionery2([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )