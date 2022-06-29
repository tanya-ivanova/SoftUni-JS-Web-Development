function solve(inputNumber) {
    let size = inputNumber;
    if(size === undefined) {
        size = 5;
    }
    
    for (let i = 0; i < size; i++) {
        let sequence = '* '.repeat(size);
        console.log(sequence);
    }
}

solve();