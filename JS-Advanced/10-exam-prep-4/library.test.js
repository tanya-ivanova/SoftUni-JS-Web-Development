const {expect} = require('chai');
const {library} = require('./library');

describe('Testing library object', () => {
    describe('Testing calcPriceOfBook', () => {
        it('Test with valid input without discount', () => {
            expect(library.calcPriceOfBook('Lion', 2000)).to.equal('Price of Lion is 20.00');
        });

        it('Test with valid input with discount', () => {
            expect(library.calcPriceOfBook('Lion', 1970)).to.equal('Price of Lion is 10.00');
        });

        it('Test with valid input with discount - edge case', () => {
            expect(library.calcPriceOfBook('Lion', 1980)).to.equal('Price of Lion is 10.00');
        });

        it('Test with valid input without discount - edge case', () => {
            expect(library.calcPriceOfBook('Lion', 1981)).to.equal('Price of Lion is 20.00');
        });

        it('Test with invalid input - 1', () => {
            expect(() => library.calcPriceOfBook(20, 2020)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.calcPriceOfBook([], 2020)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.calcPriceOfBook('Love', '2020')).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.calcPriceOfBook('Love', [])).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.calcPriceOfBook('Love', 2111.90)).to.throw('Invalid input');
        });
    });

    describe('Test findBook', () => {
        it('Test finding the book - 1', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
        });

        it('Test finding the book - 2', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style')).to.equal('We found the book you want.');
        });

        it('Test finding the book - 3', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal('We found the book you want.');
        });
        
        it('Test not finding the book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'The castle')).to.equal('The book you are looking for is not here!');
        });

        it('Test with empty array - should throw an Error', () => {
            expect(() => library.findBook([], 'The castle')).to.throw('No books currently available');
        });
    });

    describe('Test arrangeTheBooks', () => {
        it('Should have enough space', () => {
            expect(library.arrangeTheBooks(20)).to.equal('Great job, the books are arranged.');
        });

        it('Should have enough space - edge case', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Should not have enough space', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('Test with invalid input - 1', () => {
            expect(() => library.arrangeTheBooks(30.5)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.arrangeTheBooks(-30)).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('Test with valid input - 1', () => {
            expect(() => library.arrangeTheBooks(0)).not.to.throw();
        });

        it('Test with valid input - 2', () => {
            expect(() => library.arrangeTheBooks(1)).not.to.throw();
        });
    });
})