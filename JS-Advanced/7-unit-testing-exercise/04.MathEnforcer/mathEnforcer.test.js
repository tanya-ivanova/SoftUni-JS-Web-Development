const {expect} = require('chai');
const {mathEnforcer} = require('./mathEnforcer');

describe('Testing mathEnforcer', () => {
    it('Test addFive with not a number', () => {
        expect(mathEnforcer.addFive('45')).to.be.undefined;
        expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
    });

    it('Test addFive with negative number', () => {
        expect(mathEnforcer.addFive(-2)).to.equal(3);
    });

    it('Test addFive with positive number', () => {
        expect(mathEnforcer.addFive(9)).to.equal(14);
    });

    it('Test addFive with floating point number', () => {
        expect((mathEnforcer.addFive(5.5)).toFixed(2)).to.equal((10.5).toFixed(2));
    });

    it('Test subtractTen with not a number', () => {
        expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        expect(mathEnforcer.subtractTen([7, 8])).to.be.undefined;
    });

    it('Test subtractTen with neegative number', () => {
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
    });

    it('Test subtractTen with positive number', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    });

    it('Test subtractTen with float number', () => {
        expect((mathEnforcer.subtractTen(14.7)).toFixed(2)).to.equal((4.7).toFixed(2));
    });

    it('Test sum with first param not a number', () => {
        expect(mathEnforcer.sum('12', 4)).to.be.undefined;
    });

    it('Test sum with second param not a number', () => {
        expect(mathEnforcer.sum(2, '67')).to.be.undefined;
    });

    it('Test sum with both params not a number', () => {
        expect(mathEnforcer.sum([1, 2], 'str')).to.be.undefined;
    });

    it('Test sum with negative numbers', () => {
        expect(mathEnforcer.sum(-3, -4)).to.equal(-7);
    });

    it('Test sum with positive numbers', () => {
        expect(mathEnforcer.sum(10, 7)).to.equal(17);
    });

    it('Test sum with floating point numbers', () => {
        expect((mathEnforcer.sum(5.6, 3.2)).toFixed(2)).to.equal((8.8).toFixed(2));
    });
})