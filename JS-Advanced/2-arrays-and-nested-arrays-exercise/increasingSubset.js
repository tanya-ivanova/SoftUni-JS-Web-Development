function solve(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            result.push(biggest);
        }
    }

    return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);