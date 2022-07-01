function cityTaxes (name, population, treasury) {
    const obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            obj.treasury += Math.floor(obj.population * obj.taxRate);
        },
        applyGrowth(percentage) {
            obj.population += Math.floor(obj.population * percentage / 100);
        },
        applyRecession(percentage) {
            obj.treasury -= Math.floor(obj.treasury * percentage / 100);
        }
    }

    return obj;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);