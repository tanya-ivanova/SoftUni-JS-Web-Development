const {expect} = require('chai');
const {chooseYourCar} = require('./chooseYourCar');

describe('Test Choos Your Car', () => {
    describe('Test choosingType', () => {
        it('Test with year less than 1900', () => {
            expect(() => chooseYourCar.choosingType('combi', 'blue', 1890)).to.throw('Invalid Year!');
        });

        it('Test with year less than 2023', () => {
            expect(() => chooseYourCar.choosingType('combi', 'blue', 2023)).to.throw('Invalid Year!');
        });

        it('Test with type different from Sedan', () => {
            expect(() => chooseYourCar.choosingType('combi', 'blue', 2020)).to.throw('This type of car is not what you are looking for.');
        });

        it('Test with year 1900', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 1900)).to.equal('This Sedan is too old for you, especially with that blue color.');
        });

        it('Test with year 2009', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.equal('This Sedan is too old for you, especially with that blue color.');
        });

        it('Test with year 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal('This blue Sedan meets the requirements, that you have.');
        });

        it('Test with year 2022', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.equal('This blue Sedan meets the requirements, that you have.');
        });
    });

    describe('Test brandName', () => {
        it('Test with invalid input for brands - 1', () => {
            expect(() => chooseYourCar.brandName('Opel', 1)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brands - 2', () => {
            expect(() => chooseYourCar.brandName(1, 1)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 1', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '1')).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 2', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [1])).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 3', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1.5)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 4', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 5', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 10)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for brandIndex - 6', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');
        });

        it('Test happy path - remove at index 0', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
        });

        it('Test happy path - remove at index 1', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
        });

        it('Test happy path - remove at last index', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal('BMW, Toyota');
        });
    });

    describe('Test CarFuelConsumption', () => {
        it('Test with invalid input for first parameter - 1', () => {
            expect(() => chooseYourCar.carFuelConsumption('100', 8)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for first parameter - 2', () => {
            expect(() => chooseYourCar.carFuelConsumption([100], 8)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for first parameter - 3', () => {
            expect(() => chooseYourCar.carFuelConsumption(-100, 8)).to.throw('Invalid Information!');
        });

        it('Test with invalid input for second parameter - 1', () => {
            expect(() => chooseYourCar.carFuelConsumption(100, '8')).to.throw('Invalid Information!');
        });

        it('Test with invalid input for second parameter - 2', () => {
            expect(() => chooseYourCar.carFuelConsumption(100, [10])).to.throw('Invalid Information!');
        });

        it('Test with invalid input for second parameter - 3', () => {
            expect(() => chooseYourCar.carFuelConsumption(100, -10)).to.throw('Invalid Information!');
        });

        it('Testing happy path - liters/100km is more than 7L', () => {
            expect(chooseYourCar.carFuelConsumption(100, 20)).to.equal('The car burns too much fuel - 20.00 liters!');
        });

        it('Testing happy path - liters/100km is equal to 7L', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it('Testing happy path - liters/100km is less than 7L', () => {
            expect(chooseYourCar.carFuelConsumption(100, 6.5)).to.equal('The car is efficient enough, it burns 6.50 liters/100 km.');
        });
    });
})