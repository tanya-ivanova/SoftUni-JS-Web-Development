function solve(input) {
    let weightKg = Number(input[0]);
    let typeOfDelivery = input[1];
    let distanceKm = Number(input[2]);

    let cost = 0;

    if(typeOfDelivery === 'standard') {
        if(weightKg < 1) {
            cost = 3 * distanceKm;
        } else if(weightKg >= 1 && weightKg < 10) {
            cost = 5 * distanceKm;
        } else if(weightKg >= 10 && weightKg < 40) {
            cost = 10 * distanceKm;
        } else if(weightKg >= 40 && weightKg < 90) {
            cost = 15 * distanceKm;
        } else if(weightKg >= 90 && weightKg < 150) {
            cost = 20 * distanceKm;
        }
    } else if(typeOfDelivery === 'express') {
        if(weightKg < 1) {
            cost = (3 * distanceKm) + (0.8 * 3 * distanceKm * weightKg);
        } else if(weightKg >= 1 && weightKg < 10) {
            cost = (5 * distanceKm) + (0.4 * 5 * distanceKm * weightKg);
        } else if(weightKg >= 10 && weightKg < 40) {
            cost = (10 * distanceKm) + (0.05 * 10 * distanceKm * weightKg);
        } else if(weightKg >= 40 && weightKg < 90) {
            cost = (15 * distanceKm) + (0.02 * 15 * distanceKm * weightKg);
        } else if(weightKg >= 90 && weightKg < 150) {
            cost = (20 * distanceKm) + (0.01 * 20 * distanceKm * weightKg);
        }
    }

    console.log(`The delivery of your shipment with weight of ${weightKg.toFixed(3)} kg. would cost ${(cost / 100).toFixed(2)} lv.`);
}

solve(["20", 
"standard",
"349"]);
