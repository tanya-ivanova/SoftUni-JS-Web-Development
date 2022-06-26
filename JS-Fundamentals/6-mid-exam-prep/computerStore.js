function computerStore (input) {
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let totalPriceWithTaxes = 0;

    while(input[0] !== "special" && input[0] !== "regular") {
        let partsPrice = Number(input.shift());
         if (partsPrice < 0) {
             console.log("Invalid price!");
             continue;
         }
         priceWithoutTaxes += partsPrice;
    }
    taxes = priceWithoutTaxes * 0.2;
    totalPriceWithTaxes = priceWithoutTaxes + taxes;

    if (input[0] === "special") {
        totalPriceWithTaxes *= 0.9;
    }

    if(totalPriceWithTaxes === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }

}

computerStore([
    'regular'
    ])