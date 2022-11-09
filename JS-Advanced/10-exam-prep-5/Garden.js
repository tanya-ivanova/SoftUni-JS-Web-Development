class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName, 
            spaceRequired, 
            ripe: false, 
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if(plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if(quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(p => p.plantName === plantName);
        if(plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const index = this.plants.indexOf(plant);
        this.plants.splice(index, 1);

        this.storage.push({
            plantName: plant.plantName,
            quantity: plant.quantity
        });

        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let output = [`The garden has ${this.spaceAvailable} free space left.`];

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let allPlantsInTheGarden =[];
        this.plants.forEach(p => allPlantsInTheGarden.push(p.plantName));
        output.push(`Plants in the garden: ${allPlantsInTheGarden.join(', ')}`);

        if(this.storage.length === 0) {
            output.push('Plants in storage: The storage is empty.');
        } else {
            let plantsInStorage = [];
            this.storage.forEach(p => plantsInStorage.push(`${p.plantName} (${p.quantity})`));
            output.push(`Plants in storage: ${plantsInStorage.join(', ')}`);
        }

        return output.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());