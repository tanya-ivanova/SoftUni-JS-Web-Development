const {expect} = require('chai');
const {flowerShop} = require('./flowerShop');

describe('Test flowerShop', () => {
    describe('Test calcPriceOfFlowers', () => {
        it('Test with valid input - 1', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 2, 2)).to.equal('You need $4.00 to buy flower!');
        });

        it('Test with valid input - 2', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 2, 0)).to.equal('You need $0.00 to buy flower!');
        });

        it('Test with invalid input - 1', () => {
            expect(() => flowerShop.calcPriceOfFlowers(4, 2, 2)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 2', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', '2', 2)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 3', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, '10')).to.throw('Invalid input!');
        });

        it('Test with invalid input - 4', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2.5, 10)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 5', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, 10.5)).to.throw('Invalid input!');
        });
    });

    describe('Test checkFlowersAvailable', () => {
        it('Test with available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
        });

        it('Test with not available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Lilly', ["Rose", "Lily", "Orchid"])).to.equal('The Lilly are sold! You need to purchase more!');
        });
    });

    describe('Test sellFlowers', () => {
        it('Test with valid input - 1', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
        });

        it('Test with valid input - 2', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        });

        it('Test with valid input - 3', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

        it('Test with invalid input - 1', () => {
            expect(() => flowerShop.sellFlowers("Orchid", 2)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 2', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2')).to.throw('Invalid input!');
        });

        it('Test with invalid input - 3', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.5)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 4', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw('Invalid input!');
        });

        it('Test with invalid input - 5', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5)).to.throw('Invalid input!');
        });
    });
})