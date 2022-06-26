function calculateRepaintingExpenses(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]) * 1.1;
    let diluent = Number(input[2]);
    let hoursWork = Number(input[3]);

    let nylonPrice = nylon * 1.50;
    let paintPrice = paint * 14.50;
    let diluentPrice = diluent * 5.00;
    let sumExpensesForMaterials = nylonPrice + paintPrice + diluentPrice + 0.40;
    let sumPerHourForCraftsman = sumExpensesForMaterials * 0.30;
    let finalSum = sumExpensesForMaterials + (sumPerHourForCraftsman * hoursWork);
    console.log(finalSum);
}

calculateRepaintingExpenses(["5 ",
"10 ",
"10 ",
"1 "])