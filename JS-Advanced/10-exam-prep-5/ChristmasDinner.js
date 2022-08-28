class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if(value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(productAndPrice) {
        let product = productAndPrice[0];
        let price = Number(productAndPrice[1]);

        if(this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(product);
        this.budget -= price;

        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        let isProductAvailable = true;

        for(let product of recipe.productsList) {
            if(!this.products.includes(product)) {
                isProductAvailable = false;
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push(recipe);

        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let meal = this.dishes.find(d => d.recipeName === dish);

        if(meal === undefined) {
            throw new Error('We do not have this dish');
        }

        if(this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = [];

        for(let key in this.guests) {
            let dish = this.dishes.find(d => d.recipeName === this.guests[key]);

            output.push(`${key} will eat ${dish.recipeName}, which consists of ${dish.productsList.join(', ')}`);
        }

        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
console.log(dinner.shopping(['Rice', 2]));
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());