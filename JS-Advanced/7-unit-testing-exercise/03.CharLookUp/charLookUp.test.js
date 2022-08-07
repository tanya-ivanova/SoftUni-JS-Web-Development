const {expect} = require('chai');
const {lookupChar} = require('./charLookUp');

describe('Testing lookupChar', () => {
    it('returns undefined if first parameter is not a string', () => {
        expect(lookupChar(9, 4)).to.be.undefined;
    });

    it('returns undefined if second parameter is not a number', () => {
        expect(lookupChar('character', 'third')).to.be.undefined;
    });

    it('returns undefined for floating point number', () => {
        expect(lookupChar('book', 2.2)).to.be.undefined;
    })

    it('returns Incorrect index for negative index', () => {
        expect(lookupChar('character', -7)).to.equal('Incorrect index');
    });

    it('returns Incorrect index for upper out-of-range index', () => {
        expect(lookupChar('character', 20)).to.equal('Incorrect index');
    });

    it('returns Incorrect index for index equal to string length', () => {
        expect(lookupChar('character', 9)).to.equal('Incorrect index');
    });

    it('returns character at the specified index', () => {
        expect(lookupChar('booking', 3)).to.equal('k');
    });

    it('returns character at index 0', () => {
        expect(lookupChar('write', 0)).to.equal('w');
    });

    it('returns character at last index', () => {
        expect(lookupChar('write', 4)).to.equal('e');
    });

});
