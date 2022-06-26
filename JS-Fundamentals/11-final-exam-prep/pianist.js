function pianist (input) {
    let numberOfPieces = Number(input.shift());
    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split("|");
        pieces[piece] = {
            composer,
            key
        }
    }
    
    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];

        if (command === "Add") {
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {
                    composer,
                    key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {
            let piece = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let piece = tokens[1];
            let newKey = tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(pieces);
    
    sorted.sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer));
    //console.log(sorted);

    for (let piece of sorted) {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    }
}

 pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);