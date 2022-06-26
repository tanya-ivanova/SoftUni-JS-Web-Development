function searchForNumber2 (arr, operations) {
    let numberOfElementToTake = operations[0];
    let numberOfElementsToDelete = operations[1];
    let searchNumber = operations[2];

    let newArr = arr.splice(0, numberOfElementToTake);

    for (let i = 0; i < numberOfElementsToDelete; i++) {
        newArr.shift();
    }
    
    const countSearches = (searchNumber) => {
        let counter = 0;
        
        newArr = newArr.filter((x) => {
            if (x === searchNumber) {
                counter++;
            }
            return x !== searchNumber;
        });
        
        return counter;
    }

    let indexCounter = countSearches(searchNumber);      
        
    console.log(`Number ${searchNumber} occurs ${indexCounter} times.`)

    function countRemovedSearchNumber(searchNumber) {
        let counter = 0;

        while (newArr.indexOf(searchNumber) !== -1) {
            let ind = newArr.indexOf(searchNumber);
            counter++;
            newArr.splice(ind, 1);
        } 
        return counter;
    }

    
}

searchForNumber2([5, 3, 3, 4, 1, 6, 3],
    [6, 1, 3]);