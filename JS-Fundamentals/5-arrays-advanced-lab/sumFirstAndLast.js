function sumFirstAndLast (arr) {
    arr = arr.map(Number);
    let first = arr.shift();
    let last = arr.pop();
    let sum = first + last;
    
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);