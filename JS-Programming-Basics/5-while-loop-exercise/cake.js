function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let totalPieces = width * length;
    let piecesLeft = totalPieces;
    let piecesTaken = 0;
    let isCakeLeft = true;

    while (input[index] !== "STOP") {
        let pieces = Number(input[index]);
        index++;        
        piecesTaken = piecesTaken + pieces;
        if (piecesTaken > totalPieces) {
            console.log(`No more cake left! You need ${piecesTaken - totalPieces} pieces more.`);
            isCakeLeft = false;
            break;
        }
    }
    if (isCakeLeft) {
        console.log(`${totalPieces - piecesTaken} pieces are left.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
