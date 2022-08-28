const {expect} = require('chai');
const {rentCar} = require('./rentCar');

describe('Test rentCar', () => {
    describe('Test searchCar', () => {
        it('Test with valid params - should return 1 matched car', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
        });

        it('Test with valid params - should return 2 matched car', () => {
            expect(rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], 'Audi')).to.equal('There is 2 car of model Audi in the catalog!');
        });

        it('Test with valid params - should throw error that there is no such model', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], 'Ford')).to.throw('There are no such models in the catalog!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "Audi", "BMW", "Audi"], 2)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 2', () => {
            expect(() => rentCar.searchCar("Audi", 'Ford')).to.throw('Invalid input!');
        });
    });

    describe('Test calculatePriceOfCar', () => {
        it('Test with valid input - model Toyota', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal('You choose Toyota and it will cost $80!');
        });

        it('Test with valid input - model Mercedes', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 0)).to.equal('You choose Mercedes and it will cost $0!');
        });

        it('Test with valid input - no such model - should throw error', () => {
            expect(() => rentCar.calculatePriceOfCar('Ford', 10)).to.throw('No such model in the catalog!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.calculatePriceOfCar(10, 10)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.calculatePriceOfCar(10, '10')).to.throw('Invalid input!');
        });
    });

    describe('Test checkBudget', () => {
        it('Test with valid input when budget is bigger than the cost', () => {
            expect(rentCar.checkBudget(10, 10, 200)).to.equal('You rent a car!');
        });

        it('Test with valid input when budget is equal to the cost', () => {
            expect(rentCar.checkBudget(10, 10, 100)).to.equal('You rent a car!');
        });

        it('Test with valid input when budget is less than the cost', () => {
            expect(rentCar.checkBudget(10, 10, 50)).to.equal('You need a bigger budget!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.checkBudget('10', 10, 50)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.checkBudget(10, '10', 50)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => rentCar.checkBudget(10, 10, '50')).to.throw('Invalid input!');
        });
    });
})