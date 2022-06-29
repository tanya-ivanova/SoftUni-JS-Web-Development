function solve(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;
    arr.reduce((previous, current) => {
        if (current >= max) {            
            result.push(current);
            max = current;
        }
        return current;        
    }, biggest);
    /*let result = arr.reduce((resultArr, current) => {
        if (current >= max) {
            max = current;
            resultArr.push(current);
        }
        return resultArr;
    }, [])*/

    return result;
    //console.log(result);
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]);
console.log('--------');
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);