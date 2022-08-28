class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage) {
        if(model === '' || Number.isInteger(horsepower) === false || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({model, horsepower, price, mileage});

        return (`New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`);
    }

    sellCar (model, desiredMileage) {
        let carForSell = this.availableCars.find(c => c.model === model);

        if(carForSell === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let price = 0;

        if(carForSell.mileage <= desiredMileage) {
            price = carForSell.price;
        } else if(carForSell.mileage - desiredMileage <= 40000) {
            price = carForSell.price * 0.95;
        } else if(carForSell.mileage - desiredMileage > 40000) {
            price = carForSell.price * 0.9;
        }

        this.soldCars.push({
            model: carForSell.model, 
            horsepower: carForSell.horsepower, 
            price: price
        })

        let index = this.availableCars.indexOf(carForSell);
        this.availableCars.splice(index, 1);

        this.totalIncome += price;

        return `${model} was sold for ${price.toFixed(2)}$`;
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        let output = ['-Available cars:'];
        this.availableCars.forEach(c => output.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));

        return output.join('\n');
    }

    salesReport(criteria) {
        
        let sortedResult = [];

        if(criteria === 'horsepower') {
            sortedResult = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if(criteria === 'model') {
            sortedResult = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        output.push(`-${this.soldCars.length} cars sold:`);
        sortedResult.forEach(c => output.push(`---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`));

        return output.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));