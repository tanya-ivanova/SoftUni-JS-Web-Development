function spiralMatrix(width, height) {
    let matrix = [];
    for(let i = 0; i < height; i++) {
        matrix.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i].push(0);
        }        
    }
    

    let row = 0;
    let col = 0;
    let number = 1;
    let length = width;
    
    

    for (let counter = 0; counter < Math.ceil(width / 2); counter++) {
        
        for (c1 = 0; c1 < length; c1++) {
            matrix[row][col] = number;
            col++;
            number++;
        }
        length -= 1;
        row++;
        col--;

        for (c2 = 0; c2 < length; c2++) {
            matrix[row][col] = number;
            row++;
            number++;
        }

        col--;
        row--;

        for (c3 = 0; c3 < length; c3++) {
            matrix[row][col] = number;
            col--;
            number++;
        }

        col++;
        row--;
        length -= 1;

        for (c4 = 0; c4 < length; c4++) {
            matrix[row][col] = number;
            row--;
            number++;
        }

        row++
        col++;
        
    }

    for (let i = 0; i < matrix.length; i++) {
        let rowSequence = '';
        for (let j = 0; j < width; j++) {
            rowSequence += matrix[i][j];
            rowSequence += ' ';
        }
        console.log(rowSequence);
    }
}

spiralMatrix(6,6);