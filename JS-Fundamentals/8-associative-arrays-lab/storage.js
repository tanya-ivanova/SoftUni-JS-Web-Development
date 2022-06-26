function storage (input) {
    let myMap = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (myMap.has(product)) {
            let currentQuantity = myMap.get(product);
            let newQuantity = currentQuantity + quantity;
            myMap.set(product, newQuantity);
        } else {
            myMap.set(product,quantity);
        }
    }
    for (let key of myMap.keys()) {
        console.log(`${key} -> ${myMap.get(key)}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);