function solve(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let indexesReversed = false;
    let winGame = false;
    let isDashboardComplete = true;

    for (let i = 0; i < input.length; i++) {
        let coordinates = input[i].split(' ').map(Number);
        let row = coordinates[0];
        let col = coordinates[1]; 
        
        for (let y = 0; y < dashboard.length; y++) {
            for (let z = 0; z < dashboard[y].length; z++) {
                if (dashboard[y][z] === false) {
                    isDashboardComplete = false;
                    break;
                }
            }
            if (!isDashboardComplete) {
                break;
            }
        }

        if(isDashboardComplete) {
            break;
        }

        if(indexesReversed) {
            if (i % 2 === 0) {
                if (dashboard[row][col] !== false) {
                    console.log("This place is already taken. Please choose another!");
                    indexesReversed = false;
                } else {
                    dashboard[row][col] = 'O';

                    let i = 0;
                    let j = 0;
                    let k = dashboard[i].length - 1;

                    if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i][j + 1] && dashboard[i][j] === dashboard[i][j + 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j] && dashboard[i][j] === dashboard[i + 2][j]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j + 1] && dashboard[i][j] === dashboard[i + 2][j + 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][k] !== false && dashboard[i][k] === dashboard[i + 1][k - 1] && dashboard[i][k] === dashboard[i + 2][k - 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    }
                }
            } else {
                if (dashboard[row][col] !== false) {
                    console.log("This place is already taken. Please choose another!");
                    indexesReversed = false;
                } else {
                    dashboard[row][col] = 'X';

                    let i = 0;
                    let j = 0;
                    let k = dashboard[i].length - 1;

                    if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i][j + 1] && dashboard[i][j] === dashboard[i][j + 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j] && dashboard[i][j] === dashboard[i + 2][j]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j + 1] && dashboard[i][j] === dashboard[i + 2][j + 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][k] !== false && dashboard[i][k] === dashboard[i + 1][k - 1] && dashboard[i][k] === dashboard[i + 2][k - 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    }
                }
            }
        } else {
            if (i % 2 === 0) {
                if (dashboard[row][col] !== false) {
                    console.log("This place is already taken. Please choose another!");
                    indexesReversed = true;
                } else {
                    dashboard[row][col] = 'X';

                    let i = 0;
                    let j = 0;
                    let k = dashboard[i].length - 1;

                    if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i][j + 1] && dashboard[i][j] === dashboard[i][j + 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j] && dashboard[i][j] === dashboard[i + 2][j]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j + 1] && dashboard[i][j] === dashboard[i + 2][j + 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][k] !== false && dashboard[i][k] === dashboard[i + 1][k - 1] && dashboard[i][k] === dashboard[i + 2][k - 2]) {
                        console.log('Player X wins!');
                        winGame = true;
                        break;
                    }
                }
            } else {
                if (dashboard[row][col] !== false) {
                    console.log("This place is already taken. Please choose another!");
                    indexesReversed = true;
                } else {
                    dashboard[row][col] = 'O';

                    let i = 0;
                    let j = 0;
                    let k = dashboard[i].length - 1;

                    if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i][j + 1] && dashboard[i][j] === dashboard[i][j + 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j] && dashboard[i][j] === dashboard[i + 2][j]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][j] !== false && dashboard[i][j] === dashboard[i + 1][j + 1] && dashboard[i][j] === dashboard[i + 2][j + 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    } else if (dashboard[i][k] !== false && dashboard[i][k] === dashboard[i + 1][k - 1] && dashboard[i][k] === dashboard[i + 2][k - 2]) {
                        console.log('Player O wins!');
                        winGame = true;
                        break;
                    }
                }
            }
        }
        if (winGame) {
            break;
        }

        isDashboardComplete = true;
    }
    if(!winGame) {
        console.log('The game ended! Nobody wins :(');
    }

    
    for(let i = 0; i < dashboard.length; i++) {
        let rowSequence = '';
        for (let j = 0; j < dashboard[i].length; j++) {
            rowSequence += dashboard[i][j];
            rowSequence += '\t';
        }
        console.log(rowSequence);
    }

}

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);