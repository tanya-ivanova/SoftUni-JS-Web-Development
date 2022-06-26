function needForSpeed (input) {
    let numberOfCars = input.shift();
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [name, mileage, fuel] = input.shift(). split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);
        cars[name] = {
            mileage,
            fuel
        }
    }

    while (input[0] !== "Stop") {
        let [command, name, ...params] = input.shift().split(" : ");
        
        if (command === "Drive") {
            let distance = Number(params[0]);
            let fuel = Number(params[1]);
            
            if (cars[name].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[name].mileage += distance;
                cars[name].fuel -= fuel;
                console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars[name].mileage >= 100000) {
                    delete cars[name];
                    console.log(`Time to sell the ${name}!`);
                }
            }
        } else if (command === "Refuel") {
            let fuel = Number(params[0]);
            /*let currentFuel = cars[name].fuel;
            cars[name].fuel += fuel;

            if (cars[name].fuel > 75) {
                cars[name].fuel = 75;
                let refill = 75 - currentFuel;
                console.log(`${name} refueled with ${refill} liters`);
            } else {
                console.log(`${name} refueled with ${fuel} liters`);
            }*/

            let refill = Math.min((75 - cars[name].fuel), fuel);
            cars[name].fuel += refill;
            console.log(`${name} refueled with ${refill} liters`);

        } else if (command === "Revert") {
            let kilometers = Number(params[0]);
            cars[name].mileage -= kilometers;

            if (cars[name].mileage < 10000) {
                cars[name].mileage = 10000;
            } else {
                console.log(`${name} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    let carsAsArray = Object.entries(cars);
    for (let car of carsAsArray) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);