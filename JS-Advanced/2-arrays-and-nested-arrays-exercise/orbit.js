function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];
    let matrix = [];
    //matrix.length = width;

    let number = 1;

    for (let i = 0; i < width; i++) {        
        matrix.push([]);       
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < height; j++) {
            matrix[i].push(0);
        }
        //console.log(matrix[i]);
    }

    matrix[x][y] = number;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < height; j++) {
            let x1 = Math.abs(x - i);
            let y1 = Math.abs(y - j);
            let fillNumber = Math.max(x1,y1) + 1;
            matrix[i][j] = fillNumber;
        }        
    }
    
    
    for (let i = 0; i < matrix.length; i++) {
        let rowSequence = '';
        for (let j = 0; j < height; j++) {
            rowSequence += matrix[i][j];
            rowSequence += ' ';
        }
        console.log(rowSequence);
    }
}

orbit([3, 3, 2, 2]);