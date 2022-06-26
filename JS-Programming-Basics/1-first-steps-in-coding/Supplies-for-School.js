function calculateSumForSchoolSupplies(input) {
    let packsPencils = Number(input[0]);
    let packsMarkers = Number(input[1]);
    let litersCleaningDetergent = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pencilsPrice = packsPencils * 5.80;
    let markersPrice = packsMarkers * 7.20;
    let detergentPrice = litersCleaningDetergent * 1.20;
    let totalSum = pencilsPrice + markersPrice + detergentPrice;
    let finalSum = totalSum - (totalSum * percentDiscount/100);    
    
    console.log(finalSum);
}

calculateSumForSchoolSupplies(["4 ",
"2 ",
"5 ",
"13 "])