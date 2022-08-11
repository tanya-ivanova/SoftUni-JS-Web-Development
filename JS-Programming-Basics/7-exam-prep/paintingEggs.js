function solve(input) {
    let size = input[0];
    let colour = input[1];
    let NumberOfLots = Number(input[2]);

    let income = 0;

    if(size === 'Large') {
        if(colour === 'Red') {
            income = 16 * NumberOfLots;
        } else if (colour === 'Green') {
            income = 12 * NumberOfLots;
        } else if(colour === 'Yellow') {
            income = 9 * NumberOfLots;
        }
    } else if(size === 'Medium') {
        if(colour === 'Red') {
            income = 13 * NumberOfLots;
        } else if (colour === 'Green') {
            income = 9 * NumberOfLots;
        } else if(colour === 'Yellow') {
            income = 7 * NumberOfLots;
        }
    } else if(size === 'Small') {
        if(colour === 'Red') {
            income = 9 * NumberOfLots;
        } else if (colour === 'Green') {
            income = 8 * NumberOfLots;
        } else if(colour === 'Yellow') {
            income = 5 * NumberOfLots;
        }
    }

    let finalIncome = income * 0.65;

    console.log(`${finalIncome.toFixed(2)} leva.`);
}

solve(["Large",
"Red",
"7"]);
