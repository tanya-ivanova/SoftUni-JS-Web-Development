class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables) {
      let types = new Set();

      vegetables.forEach(element => {
          let [type, quantity, price] = element.split(' ');
          quantity = Number(quantity);
          price = Number(price);

          types.add(type);

          let vegetable = this.availableProducts.find(v => v.type === type);

          if(vegetable === undefined) {
              vegetable = {
                  type,
                  quantity,
                  price
              }

              this.availableProducts.push(vegetable);
          } else {
              let index = this.availableProducts.indexOf(vegetable);
              this.availableProducts.splice(index, 1);
              vegetable.quantity += quantity;

              if(price > vegetable.price) {
                  vegetable.price = price;
              }

              this.availableProducts.push(vegetable);
          }
      });     

      return `Successfully added ${[...types].join(', ')}`;
  }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(element => {
            let [type, quantity] = element.split(' ');
            quantity = Number(quantity);

            let vegetable = this.availableProducts.find(v => v.type === type);

            if(vegetable === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(quantity > vegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let priceForVegetable = vegetable.price * quantity;
            totalPrice += priceForVegetable;
            
            let index = this.availableProducts.indexOf(vegetable);
            this.availableProducts.splice(index, 1);

            vegetable.quantity -= quantity;

            this.availableProducts.push(vegetable);
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity) {
        let vegetable = this.availableProducts.find(v => v.type === type);

        if(vegetable === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        let index = this.availableProducts.indexOf(vegetable);
        this.availableProducts.splice(index, 1);

        if(quantity > vegetable.quantity) {
            vegetable.quantity = 0;
            this.availableProducts.push(vegetable);
            return `The entire quantity of the ${type} has been removed.`;
        }

        vegetable.quantity -= quantity;
        this.availableProducts.push(vegetable);
        return `Some quantity of the ${type} has been removed.`;
    }

    revision () {
        let output = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price);

        let secondLine = this.availableProducts.map(v => `${v.type}-${v.quantity}-$${v.price}`).join('\n');
        output.push(secondLine);

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return output.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5", "Beans 10 2.8"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
