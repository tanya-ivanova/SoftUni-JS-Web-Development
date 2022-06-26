function houseParty(input) {
    let listOfGuests = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let name = command[0];

        if (command[2] !== "not") {
            if (listOfGuests.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                listOfGuests.push(name);
            }
        } else {
            if (listOfGuests.includes(name)) {
                let index = listOfGuests.indexOf(name);
                listOfGuests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(listOfGuests.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);