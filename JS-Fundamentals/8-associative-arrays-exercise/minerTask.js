function minerTask (input) {
    let resourcesObj = {};

    while (input.length !== 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());

        if(resourcesObj.hasOwnProperty(resource) === false) {
            resourcesObj[resource] = quantity;
        } else {
            let previousQuantity = resourcesObj[resource];
            resourcesObj[resource] = previousQuantity + quantity;
        }
    }
    for (let resource in resourcesObj) {
        console.log(`${resource} -> ${resourcesObj[resource]}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])