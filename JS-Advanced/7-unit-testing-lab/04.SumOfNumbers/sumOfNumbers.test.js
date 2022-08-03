const {expect} = require('chai');
const {sum} = require('./sumOfNumbers');

describe('Test Sum of Numbers', () => {
    it('works with integers', () => {
        expect(sum([6, 8])).to.equal(14, 'did not work with 6 and 8');
    });

    it('works with floating point numbers', () => {
        expect(sum([5.5, 2.4])).to.equal(7.9, 'did not work with 5.5 and 2.4');
    });
});
