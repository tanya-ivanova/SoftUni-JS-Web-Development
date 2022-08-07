const {expect} = require('chai');
const {isSymmetric} = require('./checkForSymmetry');

describe('Testing isSymmetric', () => {
    it('works with symmetric array of numbers', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('works with symmtric array of numbers with odd length', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false of array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns false if types in the array mismatch', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

    it('returns false if type of input is not array', () => {
        expect(isSymmetric(1, 2, 1)).to.be.false;
        expect(isSymmetric('a', 'b', 'a')).to.be.false;
    });

});
