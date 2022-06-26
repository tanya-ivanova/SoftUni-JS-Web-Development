function isMoneyEnoughForCompParts(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let processorsPrice = processors * (videocardsPrice * 0.35);
    let ramMemoryPrice = ramMemory * (videocardsPrice * 0.10);

    let totalPrice = videocardsPrice + processorsPrice + ramMemoryPrice;

    if (videocards > processors) {
        totalPrice = totalPrice * 0.85;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

isMoneyEnoughForCompParts(["920.45",
"3",
"1",
"1"])