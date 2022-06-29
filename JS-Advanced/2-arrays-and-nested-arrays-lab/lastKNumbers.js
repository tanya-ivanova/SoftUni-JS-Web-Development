function solve(n, k) {
    let sequence = [1];

    for (let i = 0; i < n - 1; i++) {
        let element = 0;
        for (let j = 0; j < k; j++) {
            if (sequence[sequence.length - 1 - j] !== undefined) {
                //console.log(sequence.length - 1 - j);
                element += sequence[sequence.length - 1 - j];
            }
            
        }
        sequence.push(element);
    }
    return sequence;
}

solve(8, 2);