function spiceMustFlow (startingYield) {
    let daysCounter = 0;
    let spiceExtracted = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        daysCounter++;
        spiceExtracted = startingYield - 26;
        startingYield = startingYield - 10;
        totalSpice = totalSpice + spiceExtracted;
    }

    if (totalSpice !== 0) {
        totalSpice = totalSpice - 26;
    }
    
    console.log(daysCounter);
    console.log(totalSpice);
}

spiceMustFlow(10);