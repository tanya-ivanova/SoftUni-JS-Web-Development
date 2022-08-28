const {expect} = require('chai');
const {carService} = require('./carService');

describe('Test carService', () => {
    describe('Test isItExpensive', () => {
        it('Test with value Engine', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it('Test with value Transmission', () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it('Test with value Wheels', () => {
            expect(carService.isItExpensive('Wheels')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('Test discount', () => {
        it('Test 15% discount', () => {
            expect(carService.discount(3, 10)).to.equal('Discount applied! You saved 1.5$');
        });

        it('Test 15% discount - edge case', () => {
            expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$');
        });

        it('Test 30% discount', () => {
            expect(carService.discount(8, 10)).to.equal('Discount applied! You saved 3$');
        });

        it('Test without discount', () => {
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
        });

        it('Test without discount - edge case', () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
        });

        it('Test with invalid input - 1', () => {
            expect(()=> carService.discount('1', 10)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(()=> carService.discount([], 10)).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(()=> carService.discount(5, '10')).to.throw('Invalid input');
        });

        it('Test with invalid input - 4', () => {
            expect(()=> carService.discount(10, [])).to.throw('Invalid input');
        });
    });

    describe('Test partsToBuy', () => {
        it('Test happy path', () => {
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}, {part: "engine", price: 500}];
            let neededParts = ["blowoff valve", "engine"];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(645);
        });

        it('Test with empty partsCatalog', () => {
            let partsCatalog = [];
            let neededParts = ["blowoff valve", "engine"];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(0);
        });

        it('Test with invalid input - partsCatalog', () => {
            let neededParts = ["blowoff valve", "engine"];
            expect(() => carService.partsToBuy('engine: 500', neededParts)).to.throw('Invalid input');
        });

        it('Test with invalid input - neededeParts', () => {
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}, {part: "engine", price: 500}];
            expect(() => carService.partsToBuy(partsCatalog, 'engine')).to.throw('Invalid input');
        });
    });
})