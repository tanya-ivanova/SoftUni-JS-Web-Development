const {expect} = require('chai');
const {createCalculator} = require('./addSubtract');

describe('Testing createCalculator function', () => {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('returns 0 at initializing the object', () => {
        let value = calculator.get()
        expect(value).to.equal(0);
    });

    it('the add function works', () => {
        calculator.add(8);
        let value = calculator.get();
        expect(value).to.equal(8);
    });

    it('the subtract function works', () => {
        calculator.add(10);
        calculator.subtract(2);
        let value = calculator.get();
        expect(value).to.equal(8);
    });

    it('works with numbers given as strings', () => {
        calculator.add('12');
        calculator.subtract('2');
        let value = calculator.get();
        expect(value).to.equal(10);
    });

    it('works with float numbers', () => {
        calculator.add(45,8);
        calculator.subtract(5,8);
        calculator.add(10);
        let value = calculator.get();
        expect(value).to.equal(50);
    });

    it('returns undefined if internal value is accessed from outside', () => {
        let value = calculator.value;        
        calculator.value = 5;
        let newValue = calculator.get();
        expect(value).to.be.undefined;
        expect(newValue).to.equal(0);
    });

    it('works with negative numbers', () => {
        calculator.subtract(20);
        calculator.add(10);
        let value = calculator.get();
        expect(value).to.equal(-10);
    });

    it('Add does not work with strings that are not numbers', () => {
        calculator.add('hihi');        
        expect(calculator.get()).to.be.NaN;
    });

    it('Subtract does not work with strings that are not numbers', () => {
        calculator.subtract('hihi');        
        expect(calculator.get()).to.be.NaN;
    });

})
