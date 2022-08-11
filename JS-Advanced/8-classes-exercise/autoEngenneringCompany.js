function solve(input) {
    let cars = {};

    input.forEach(element => {
        let [brand, model, producedCars] = element.split(' | ');
        producedCars = Number(producedCars);

        if(!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }

        if(!cars[brand].hasOwnProperty(model)) {
            cars[brand][model] = producedCars;
        } else {
            cars[brand][model] += producedCars;
        }
    });

    for(let brand in cars) {
        let models = Object.entries(cars[brand]);
        
        console.log(`${brand}`);

        for(let model of models) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
