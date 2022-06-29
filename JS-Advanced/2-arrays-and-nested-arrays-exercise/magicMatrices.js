function magicMatrices(matrix) {
    let sumIsEqual = true;
    let sum = matrix[0].reduce((accum, current) => accum + current, 0);    

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;        
        for (let col = 0; col < matrix[row].length; col++) {
            sumRow += matrix[row][col];            
        }
        //console.log(sumRow);
        if(sumRow !== sum) {
            sumIsEqual = false;
            break;       
        }        
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }
        if (sumCol !== sum) {
            sumIsEqual = false;
            break;
        }
    }
    console.log(sumIsEqual);
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);