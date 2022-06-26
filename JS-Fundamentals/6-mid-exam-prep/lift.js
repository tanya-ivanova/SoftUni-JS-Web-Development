function lift (input) {
    let people = Number(input.shift());
    let wagons = input[0].split(" ").map(Number);
    
    for(let i = 0; i < wagons.length; i++) {
        let peopleToTake = 0;

        if(wagons[i] < 4) {
            peopleToTake = 4 - wagons[i];
        }

        if (peopleToTake > people) {
            wagons[i] += people;
            people = 0;
        } else {
            people -= peopleToTake;
            wagons[i] += peopleToTake;
        }

        if (people === 0) {
            break;
        }
    }
    
    let hasEmptySpaces = false;
    let isLiftFull = true;

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            hasEmptySpaces = true;
            isLiftFull = false;
        }
    }

    if (people === 0 && hasEmptySpaces) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    }

    if (people > 0 && !hasEmptySpaces) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(" "));
    }
    
    if (people === 0 && isLiftFull) {
        console.log(wagons.join(" "));
    }
}

lift([
    "15",
    "0 0 0 0 0"
   ]);

lift([
    "20",
    "0 2 0"
   ]);