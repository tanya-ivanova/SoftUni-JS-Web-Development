function taxCalculator(input) {
    let carsArr = input[0].split('>>');
    let totalTaxes = 0;
    let familyTax = 50;
    let heavyDutyTax = 80;
    let sportsTax = 100;
    
    for (let car of carsArr) {
        let [carType, years, kilometers] = car.split(' ');
        years = Number(years);
        kilometers = Number(kilometers);

        if (carType === 'family') {
            let tax = (Math.floor(kilometers / 3000)) * 12 + (familyTax - (years * 5));
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            totalTaxes += tax;
        } else if (carType === 'heavyDuty') {
            let tax = (Math.floor(kilometers / 9000)) * 14 + (heavyDutyTax - (years * 8));
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            totalTaxes += tax;
        } else if (carType === 'sports') {
            let tax = (Math.floor(kilometers / 2000)) * 18 + (sportsTax - (years * 9));
            console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            totalTaxes += tax;
        } else {
            console.log('Invalid car type.');
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}

taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);