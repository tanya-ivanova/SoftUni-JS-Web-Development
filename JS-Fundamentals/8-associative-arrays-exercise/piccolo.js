function piccolo (input) {
    let parkingLot = {};
    
    for (let line of input) {
        let [direction, carNumber] = line.split(", ");
        let number = "";
        for (let i = 2; i < carNumber.length - 2; i++) {
            number += carNumber[i];
        }

        if(direction === "IN") {
            parkingLot[carNumber] = number;            
        } else if (direction === "OUT") {
            delete parkingLot[carNumber];
        }
    }
    
    let sortedArr = Object.entries(parkingLot);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]));     
    
    if(sortedArr.length !== 0) {
        sortedArr.forEach(x => console.log(x[0]));
    } else {
        console.log("Parking Lot is Empty");
    }
    
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);