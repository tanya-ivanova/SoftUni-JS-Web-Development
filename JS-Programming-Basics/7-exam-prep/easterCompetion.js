function solve(input) {
    let numberOfEasterBreads = Number(input.shift());
    let bestPoints = 0;
    let bestBaker = '';

    for(let i = 0; i < numberOfEasterBreads; i++) {
        let baker = input.shift();
        let bakerPoints = 0;

        while(input[0] !== 'Stop') {
            let currentPoints = Number(input.shift());
            bakerPoints += currentPoints;
        }

        console.log(`${baker} has ${bakerPoints} points.`);

        if(bakerPoints > bestPoints) {
            bestPoints = bakerPoints;
            bestBaker = baker;
            console.log(`${baker} is the new number 1!`);
        }

        input.shift();
    }

    console.log(`${bestBaker} won competition with ${bestPoints} points!`);
}

solve(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);
