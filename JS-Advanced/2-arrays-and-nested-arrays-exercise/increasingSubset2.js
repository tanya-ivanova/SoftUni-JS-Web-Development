function nonDecreasingSubset2 (arr) {
    let biggest = arr[0];
    let filteredArray = arr.filter(el => {
        if (el >= biggest) {
            biggest = el;
        }
        return el >= biggest;
    });    

    return filteredArray;
}