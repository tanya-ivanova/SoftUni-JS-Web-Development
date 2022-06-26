function storeProvision (currentStock, toBeDeliveredStock) {
    let arrCurrentStock = [];
    let arrToBeDeliveredStock = [];

    while(currentStock.length !== 0) {
        let name = currentStock.shift();
        let quantity = Number(currentStock.shift());
        let product = {
            name,
            quantity
        }
        arrCurrentStock.push(product);
        //console.log(product);
    }

    while(toBeDeliveredStock.length !== 0) {
        let name = toBeDeliveredStock.shift();
        let quantity = Number(toBeDeliveredStock.shift());
        let product = {
            name,
            quantity
        }
        arrToBeDeliveredStock.push(product);
        //console.log(product);
    }
    
    let newProductsArr = [];

    for (let i = 0; i < arrToBeDeliveredStock.length; i++) {
        let isProductAlreadyInStock = false;
        for (let j = 0; j < arrCurrentStock.length; j++) {
            if(arrToBeDeliveredStock[i].name === arrCurrentStock[j].name) {
                arrCurrentStock[j].quantity += arrToBeDeliveredStock[i].quantity;
                isProductAlreadyInStock = true;
            } 
        }
        if(!isProductAlreadyInStock) {
            newProductsArr.push(arrToBeDeliveredStock[i]);
        }
    }
    while(newProductsArr.length !== 0) {
        arrCurrentStock.push(newProductsArr.shift());
    }
    
    arrCurrentStock.forEach(x => console.log(`${x.name} -> ${x.quantity}`));
    //newProductsArr.forEach(x => console.log(`${x.name} -> ${x.quantity}`));
}

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);