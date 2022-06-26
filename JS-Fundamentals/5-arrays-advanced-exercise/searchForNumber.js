function searchForNumber (arr, operations) {
    let numberOfElementToTake = operations[0];
    let numberOfElementsToDelete = operations[1];
    let searchNumber = operations[2];

    let newArr = arr.splice(0, numberOfElementToTake);

    for (let i = 0; i < numberOfElementsToDelete; i++) {
        newArr.shift();
    }

    let indexCounter = 0;

    while (newArr.indexOf(searchNumber) !== -1) {
        let ind = newArr.indexOf(searchNumber);
        indexCounter++;
        newArr.splice(ind, 1);
    }       
        
    console.log(`Number ${searchNumber} occurs ${indexCounter} times.`)
}

searchForNumber([5, 3, 3, 4, 1, 6, 3],
    [6, 1, 3]);