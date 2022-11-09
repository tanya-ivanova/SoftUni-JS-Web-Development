class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.types = [];
    }

    loadingVegetables (vegetables) {
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const searchedType = this.types.find(v => v === type);
            if(searchedType === undefined) {
                this.types.push(type);
            }

            const vegetable = this.availableProducts.find(v => v.type === type);
            if(vegetable === undefined) {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                });
            } else {
                vegetable.quantity += quantity;
                if(price > vegetable.price) {
                    vegetable.price = price;
                }
            }

        });

        return `Successfully added ${this.types.join(', ')}`;
    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ');

            const vegetable = this.availableProducts.find(v => v.type === type);

            if(vegetable === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(quantity > vegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += vegetable.price * quantity;
            vegetable.quantity -= quantity;
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity) {
        const vegetable = this.availableProducts.find(v => v.type === type);

        if(vegetable === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if(quantity >= vegetable.quantity) {
            vegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        vegetable.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision () {
        let output = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(v => output.push(`${v.type}-${v.quantity}-$${v.price}`));

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return output.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());