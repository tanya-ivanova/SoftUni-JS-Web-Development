function carWash (inputArr) {
    let percentClean = 0;

    function soap (percentClean) {        
        return percentClean += 10;
    }

    function water (percentClean) {        
        return percentClean + percentClean * 0.20;
    }

    function vacuumCleaner (percentClean) {        
        return percentClean + percentClean * 0.25;
    }

    function mud (percentClean) {        
        return percentClean - percentClean * 0.10;
    }

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];

        if (command === "soap") {
            percentClean = soap(percentClean);
        } else if (command === "water") {
            percentClean = water(percentClean);
        } else if (command === "vacuum cleaner") {
            percentClean = vacuumCleaner(percentClean);
        } else if (command === "mud") {
            percentClean = mud(percentClean);
        }
    }
    console.log(`The car is ${percentClean.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);