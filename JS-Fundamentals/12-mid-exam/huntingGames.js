function huntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerDayForOnePerson = Number(input.shift());
    let foodPerDayForOnePerson = Number(input.shift());
    let haveEnoughEnergy = true;
    let counterDays = 0;

    let totalWater = days * players * waterPerDayForOnePerson;
    let totalFood = days * players * foodPerDayForOnePerson;

    for (let i = 0; i < days; i++) {
        counterDays++;
        let energyLoss = Number(input[i]);

        energy -= energyLoss;

        if (energy <= 0) {
            haveEnoughEnergy = false;
            break;
        }

        if (counterDays % 2 === 0) {
            energy = energy + energy * 0.05;
            totalWater = totalWater - totalWater * 0.3;
        }

        if (counterDays % 3 === 0) {
            energy = energy + energy * 0.1;
            totalFood = totalFood - (totalFood / players);
        }
    }
    
    if(haveEnoughEnergy) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}

huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"]);