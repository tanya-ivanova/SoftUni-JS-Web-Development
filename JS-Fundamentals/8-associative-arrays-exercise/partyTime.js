function partyTime (input) {
    let guestsList = {};

    while(input[0] !== "PARTY") {
        let guest = input.shift();
        guestsList[guest] = 0;
    }
    input.shift();
    
    for (let guest of input) {
        if (guestsList.hasOwnProperty(guest)) {
            guestsList[guest] = 1;
        }
    }
    let arrGuestsList = Object.entries(guestsList);
    let counter = 0;
    let guestsNotInTheParty = {};
    for (let element of arrGuestsList) {
        if (element[1] === 0) {
            counter++;
            guestsNotInTheParty[element[0]] = 0;
        }
    }
    let arrGuestsNotInTheParty = Object.entries(guestsNotInTheParty);
    for (let element of arrGuestsNotInTheParty) {
        let asciCode = element[0].charCodeAt(0);
        if (asciCode >= 48 && asciCode <= 57) {
            guestsNotInTheParty[element[0]] = 1;
        }
    }
    console.log(counter);
    for (let key in guestsNotInTheParty) {
        if(guestsNotInTheParty[key] === 1) {
            console.log(key);
        }
    }   
    for (let key in guestsNotInTheParty) {
        if(guestsNotInTheParty[key] === 0) {
            console.log(key);
        }
    }   
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);