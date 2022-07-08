function carFactory (inputObj) {
    let carObj = {};
    carObj.model = inputObj.model;

    if (inputObj.power <= 90) {
        carObj.engine = {
            power: 90,
            volume: 1800
        }
    } else if (inputObj.power <= 120) {
        carObj.engine = {
            power: 120,
            volume: 2400
        } 
    } else if (inputObj.power <= 200) (
        carObj.engine = {
            power: 200,
            volume: 3500
        }
    )

    if (inputObj.carriage === 'hatchback') {
        carObj.carriage = {
            type: 'hatchback',
            color: inputObj.color
        }
    } else if (inputObj.carriage === 'coupe') {
        carObj.carriage = {
            type: 'coupe',
            color: inputObj.color
        }
    }

    if (inputObj.wheelsize % 2 === 1) {
        let wheel = inputObj.wheelsize;
        carObj.wheels = [wheel, wheel, wheel, wheel];
    } else {
        let wheel = inputObj.wheelsize - 1;
        carObj.wheels = [wheel, wheel, wheel, wheel];
    }

    return carObj;
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));