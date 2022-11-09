const {expect} = require('chai');
const {carService} = require('./carService');

describe('Test carService object', () => {
    describe('Test isItExpensive', () => {
        it('parameter is equal to Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it('parameter is equal to Transmission', () => {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it('parameter is different from Engine or Transmission', () => {
            expect(carService.isItExpensive('Brakes')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('Test discount', () => {
        it('Invalid input for numberOfParts - 1', () => {
            expect(() => carService.discount('1', 5)).to.throw('Invalid input');
        });

        it('Invalid input for numberOfParts - 2', () => {
            expect(() => carService.discount([], 5)).to.throw('Invalid input');
        });

        it('Invalid input for totalPrice - 1', () => {
            expect(() => carService.discount(1, '50')).to.throw('Invalid input');
        });

        it('Invalid input for totalPrice - 2', () => {
            expect(() => carService.discount(10, [])).to.throw('Invalid input');
        });

        it('Test numberOfParts is smaller or equal to 2 - test 1', () => {
            expect(carService.discount(1, 50)).to.equal('You cannot apply a discount');
        });

        it('Test numberOfParts is smaller or equal to 2 - test 2', () => {
            expect(carService.discount(2, 50)).to.equal('You cannot apply a discount');
        });

        it('Test numberOfParts is higher than 2 and smaller than 7', () => {
            expect(carService.discount(5, 100)).to.equal('Discount applied! You saved 15$');
        });

        it('Test numberOfParts equal to 7', () => {
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
        });

        it('Test numberOfParts is higher than 7', () => {
            expect(carService.discount(10, 100)).to.equal('Discount applied! You saved 30$');
        });
    });

    describe('Test partsToBuy', () => {
        it('Test with invalid input for partsCatalog - 1', () => {
            expect(() => carService.partsToBuy(1, [2, 3])).to.throw('Invalid input');
        });

        it('Test with invalid input for partsCatalog - 2', () => {
            expect(() => carService.partsToBuy('1', [2, 3])).to.throw('Invalid input');
        });

        it('Test with invalid input for neededParts - 1', () => {
            expect(() => carService.partsToBuy([1, 2], 5)).to.throw('Invalid input');
        });

        it('Test with invalid input for neededParts - 2', () => {
            expect(() => carService.partsToBuy([1, 2], '5')).to.throw('Invalid input');
        });

        it('Test partsCatalog is empty array', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });

        it('Test valid input', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "injectors", price: 100}], ["blowoff valve", "injectors"])).to.equal(245);
        });
    });
})