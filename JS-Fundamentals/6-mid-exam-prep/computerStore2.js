function solve(input) {
    let priceWithoutTaxes = 0;
    let isSpecial = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "special") {
            isSpecial = true;
            break;
        } else if (input[i] === "regular") {
            break;
        } else {
            let price = Number(input[i]);
            if (price < 0) {
                console.log("Invalid price!");
            } else {
                priceWithoutTaxes += price;
            }
        }
    }

    if (priceWithoutTaxes === 0) {
        console.log("Invalid order!");
    } else {
        let totalPriceWithTaxes = priceWithoutTaxes + priceWithoutTaxes * 0.2;
        if(isSpecial) {
            totalPriceWithTaxes = totalPriceWithTaxes * 0.9;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${(priceWithoutTaxes * 0.2).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}

solve([
    'regular'
    ]);