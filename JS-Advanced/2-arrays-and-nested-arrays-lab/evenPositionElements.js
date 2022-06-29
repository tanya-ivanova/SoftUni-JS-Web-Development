function solve(input) {
    let evenPositionElements = '';

    for (let i = 0; i < input.length; i += 2) {
        evenPositionElements += input[i];
        evenPositionElements += ' ';
    }

    console.log(evenPositionElements);
}

solve(['20', '30', '40', '50', '60']);