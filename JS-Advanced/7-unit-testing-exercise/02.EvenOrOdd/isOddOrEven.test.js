const {expect} = require('chai');
const {isOddOrEven} = require('./isOddOrEven');

describe('Testing isOddOrEven', () => {
    it('returns undefined for array of strings', () => {
        expect(isOddOrEven(['odd', 'even'])).to.be.undefined;
    });

    it('returns undefined for number', () => {
        expect(isOddOrEven(9)).to.be.undefined;
    });

    it('works with odd string', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    });

    it('works with even string', () => {
        expect(isOddOrEven('even')).to.equal('even');
    });
    
});
