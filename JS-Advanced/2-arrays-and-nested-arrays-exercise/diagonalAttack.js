function diagonalAttack(input) {
    let matrix = [];
    //let areDiagonalsEqual = false;

    for (let element of input) {
        let arr = element.split(' ').map(Number);
        matrix.push(arr);
    }

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonal === secondaryDiagonal) {
        //areDiagonalsEqual = true;
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col !== row && col !== matrix.length - 1 - row) {
                    matrix[row][col] = mainDiagonal;
                }

            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        let rowSequence = '';
        for (let col = 0; col < matrix[row].length; col++) {
            rowSequence += matrix[row][col];
            rowSequence += ' ';
        }
        console.log(rowSequence);
    }
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);