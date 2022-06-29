function solve(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());
    
    return first + last;
}

solve(['20', '30', '40']);