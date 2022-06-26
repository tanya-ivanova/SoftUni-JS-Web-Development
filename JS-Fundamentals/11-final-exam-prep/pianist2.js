function pianist2 (input) {
    let numberOfPieces = Number(input.shift());
    let pieces = {};
    let actions = {
        "Add": add,
        "Remove": remove,
        "ChangeKey": changeKey
    }

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split("|");
        pieces[piece] = {
            composer,
            key
        }
    }
    
    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let [command, ...params] = tokens;        
        let action = actions[command];
        action(params);        
    }
    
    for (let piece of Object.entries(pieces)) {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    }

    function add (params) {
        let piece = params[0];
        let composer = params[1];
        let key = params[2];

        if (pieces.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        } else {
            pieces[piece] = {
                composer,
                key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function remove(params) {
        let piece = params[0];
        if (pieces.hasOwnProperty(piece)) {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey (params) {
        let piece = params[0];
        let newKey = params[1];
        if (pieces.hasOwnProperty(piece)) {
            pieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

 pianist2([
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