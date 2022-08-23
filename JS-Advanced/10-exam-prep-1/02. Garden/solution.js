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

    let plant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0
    }

    this.plants.push(plant);

    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let isPlantFound = false;

    if(quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    for(let plant of this.plants) {
      if(plant.plantName === plantName) {
        isPlantFound = true;

        if(plant.ripe === true) {
          throw new Error(`The ${plantName} is already ripe.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if(quantity === 1) {
          return `${quantity} ${plantName} has successfully ripened.`;
        } else if(quantity > 1) {
          return `${quantity} ${plantName}s have successfully ripened.`;
        }
      }
    }
    if(!isPlantFound) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
  }

  harvestPlant(plantName) {
    let isPlantFound = false;

    for(let i = 0; i < this.plants.length; i++) {
      let plant = this.plants[i];

      if(plant.plantName === plantName) {
        isPlantFound = true;

        if(plant.ripe === false) {
          throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(i, 1);
        
        let quantity = plant.quantity;

        let plantForStorage = {
          plantName,
          quantity
        }

        this.storage.push(plantForStorage);

        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;

      } 
    }

    if(!isPlantFound) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
  }

  generateReport() {
    let output = [`The garden has ${this.spaceAvailable} free space left.`];

    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
    let plantNames = [];
    this.plants.forEach(pl => plantNames.push(pl.plantName));

    output.push(`Plants in the garden: ${plantNames.join(', ')}`);

    if(this.storage.length === 0) {
      output.push('Plants in storage: The storage is empty.');
    } else {
      let plantsInStorage = [];
      this.storage.forEach(el => {
        let currentPlant = `${el.plantName} (${el.quantity})`;
        plantsInStorage.push(currentPlant);
      })

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
  
