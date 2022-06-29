function solve(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] > maxNumber) {
                maxNumber = input[row][col];
            }
        }
    }
    return maxNumber;
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);