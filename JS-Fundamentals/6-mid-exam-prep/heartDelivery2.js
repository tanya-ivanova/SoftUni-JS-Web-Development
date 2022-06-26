function solve(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let index = 0;
    
    while (input[0] !== 'Love!') {
        let [_, jumpLength] = input.shift().split(' ');
        jumpLength = Number(jumpLength);
        index += jumpLength;

        if(index > neighborhood.length - 1) {
            index = 0;
        }
        
        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighborhood[index] -= 2;
            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }
    console.log(`Cupid's last position was ${index}.`);
    let sum = neighborhood.reduce((accum, current) => accum + current, 0);

    if (sum === 0) {
        console.log('Mission was successful.');
    } else {
        let counter = neighborhood.filter(x => x > 0).length;
        console.log(`Cupid has failed ${counter} places.`);
    }
}

solve(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);