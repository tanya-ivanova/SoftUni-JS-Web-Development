function furniture (input) {
    let pattern = />>([A-Z]+[a-z]*)<<(\d+\.*\d*)!(\d+)/g;
    let names = [];
    let totalPrice = 0;    

    while(input[0] !== "Purchase") {
        let item = input.shift();
        
        let validItem = pattern.exec(item);        

        while(validItem !== null) {
            let name = validItem[1];
            let price = validItem[2];
            let quantity = validItem[3];
            totalPrice += price * quantity;
            names.push(name);
                        
            validItem = pattern.exec(item);
        }        
    }       
    console.log("Bought furniture:");
    names.forEach(x => console.log(x));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);