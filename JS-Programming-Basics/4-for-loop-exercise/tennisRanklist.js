function tennisRanklist(input) {
    let numberOfTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let tournamentPoints = 0;
    let wins = 0;
    let finalPoints = 0;

    for (let i = 2; i <= numberOfTournaments + 1; i++) {
        let tournamentResult = input[i];
       
        switch(tournamentResult) {
            case "W":
                tournamentPoints = tournamentPoints + 2000;
                wins++;
                break;
            case "F":
                tournamentPoints = tournamentPoints + 1200;
                break;
            case "SF":
                tournamentPoints = tournamentPoints + 720;
                break;
        }
    }
    finalPoints = initialPoints + tournamentPoints;
    let avaragePoints = tournamentPoints / numberOfTournaments;
    let percentWins = wins / numberOfTournaments * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(percentWins.toFixed(2) + "%");

}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);