const {expect} = require('chai');
const {dealership} = require('./dealership');

describe('Test dealership', () => {
    describe('Test newCarCost', () => {
        it('Test when there is discount - 1', () => {
            expect(dealership.newCarCost('Audi A6 4K', 50000)).to.equal(30000);
        });

        it('Test when there is discount - 2', () => {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
        });

        it('Test when there is discount - 3', () => {
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
        });

        it('Test when there is discount - 4', () => {
            expect(dealership.newCarCost('Audi TT 8J', 20000)).to.equal(6000);
        });

        it('Test when there is no discount - 1', () => {
            expect(dealership.newCarCost('Audi', 20000)).to.equal(20000);
        });        
    });

    describe('Test carEquipment', () => {
        it('Test when the wanted extras are avilable', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3])).to.deep.equal(['heated seats', 'sport rims', 'navigation']);
        });

        it('Test when there no wanted extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [])).to.deep.equal([]);
        });
    });

    describe('Test euroCategory', () => {
        it('Test when category is greater than 4', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
        });

        it('Test when category is equal to 4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });

        it('Test when category is less than 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
})