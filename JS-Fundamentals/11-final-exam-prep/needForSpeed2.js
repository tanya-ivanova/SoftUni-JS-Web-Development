function solve(input) {
    let numberOfCars = Number(input.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
            cars[car] = {
                mileage,
                fuel
            }        
    }
    
    while (input[0] !== 'Stop') {
        let [command, car, ...params] = input.shift().split(' : ');
        
        if (command === 'Drive') {
            let distance = Number(params[0]);
            let fuel = Number(params[1]);

            if (fuel > cars[car].fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if (command === 'Refuel') {
            let fuel = Number(params[0]);
            let neededFuelToFillUp = 75 - cars[car].fuel;

            if (fuel > neededFuelToFillUp) {
                fuel = neededFuelToFillUp;
            }
            cars[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);

        } else if (command === 'Revert') {
            let kilometers = Number(params[0]);
            cars[car].mileage -= kilometers;
            
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}

solve([
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