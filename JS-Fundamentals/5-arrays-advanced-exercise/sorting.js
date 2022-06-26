function sorting (arr) {
    arr.sort((a, b) => a -b);
    let arrCopy = arr.slice(0);    
    let sortedArr = [];

    for (let i = 0; i < arrCopy.length / 2; i++) {
        sortedArr.push(arr.pop());
        sortedArr.push(arr.shift());        
    }
    console.log(sortedArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);