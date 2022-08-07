function solve(input) {
    let collection = {};
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');

        collection[piece] = {
            composer,
            key
        };
    }
    
    while(input[0] !== 'Stop') {
        let [command, piece, ...params] = input.shift().split('|');

        if(command === 'Add') {
            let composer = params[0];
            let key = params[1];

            if(collection.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                collection[piece] = {
                    composer,
                    key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if(collection.hasOwnProperty(piece)) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if(command === 'ChangeKey') {
            let newKey = params[0];

            if(collection.hasOwnProperty(piece)) {
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for(let key in collection) {
        console.log(`${key} -> Composer: ${collection[key].composer}, Key: ${collection[key].key}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);
