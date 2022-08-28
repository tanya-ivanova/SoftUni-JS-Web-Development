const {expect} = require('chai');
const {numberOperations} = require('./numberOperations');

describe('Test numberOperations', () => {
    describe('Test powNumber', () => {
        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });

        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });

        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
        
        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(2.5)).to.equal(6.25);
        });

        it('Should return the power of the given number', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });

    describe('Test numberChecker', () => {
        it('Test with number lower than 100 - 1', () => {
            expect(numberOperations.numberChecker(20)).to.equal('The number is lower than 100!');
        });

        it('Test with number lower than 100 - 2', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });

        it('Test with number lower than 100 - 3', () => {
            expect(numberOperations.numberChecker(50.5)).to.equal('The number is lower than 100!');
        });

        it('Test with number lower than 100 - 4', () => {
            expect(numberOperations.numberChecker(-500)).to.equal('The number is lower than 100!');
        });

        it('Test with number equal to 100 - 1', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });

        it('Test with number equal to 100 - 2', () => {
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
        });

        it('Test with number greater than 100 - 1', () => {
            expect(numberOperations.numberChecker(100.8)).to.equal('The number is greater or equal to 100!');
        });

        it('Test with number greater than 100 - 2', () => {
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');
        });

        it('Test with valid input - 1', () => {
            expect(() => numberOperations.numberChecker('100')).not.to.throw();
        });

        it('Test with valid input - 2', () => {
            expect(() => numberOperations.numberChecker([])).not.to.throw();
        });

        it('Test with invalid input - 1', () => {
            expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!');
        });

        it('Test with invalid input - 2', () => {
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
        });

        it('Test with invalid input - 3', () => {
            expect(() => numberOperations.numberChecker([1, 2])).to.throw('The input is not a number!');
        });
    });

    describe('Test sumArrays', () => {
        it('Test with two arrays with equal length', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
        });

        it('Test with two arrays with different lengths - 1', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4, 5])).to.deep.equal([2, 4, 6, 4, 5]);
        });

        it('Test with two arrays with different lengths - 2', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 6, 7], [1, 2, 3])).to.deep.equal([2, 4, 6, 6, 7]);
        });

        it('Test with two arrays with different lengths - 3', () => {
            expect(numberOperations.sumArrays([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
        });

        it('Test with two arrays with different lengths - 4', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
        });
    });
})