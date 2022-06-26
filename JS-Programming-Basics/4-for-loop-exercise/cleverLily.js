function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sum = 0;
    let toysCount = 0;
    let count = 1;

    for (let i = 2; i <= age; i+=2) {
        sum = sum + (10 * count) - 1;
        count++;
    }
    for (let i = 1; i <= age; i+=2) {
        toysCount++;
    }
    sum = sum + (toysCount * toyPrice);

    if (sum >= washingMachinePrice) {
        console.log(`Yes! ${(sum - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - sum).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"]);