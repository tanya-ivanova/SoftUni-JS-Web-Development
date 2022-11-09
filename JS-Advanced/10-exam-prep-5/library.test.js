const {expect} = require('chai');
const {library} = require('./library.js');

describe('Test library', () => {
    describe('Test calcPriceOfBook', () => {
        it('Test with invalid input - 1', () => {
            expect(() => library.calcPriceOfBook(3, 1990)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.calcPriceOfBook([], 1990)).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(() => library.calcPriceOfBook('Name', [])).to.throw('Invalid input');
        });

        it('Test with invalid input - 4', () => {
            expect(() => library.calcPriceOfBook('Name', '1')).to.throw('Invalid input');
        });

        it('Test with invalid input - 5', () => {
            expect(() => library.calcPriceOfBook('Name', 90.5)).to.throw('Invalid input');
        });

        it('Test with year less than 1980', () => {
            expect(library.calcPriceOfBook('Name', 1970)).to.equal('Price of Name is 10.00');
        });

        it('Test with year 1980', () => {
            expect(library.calcPriceOfBook('Name', 1980)).to.equal('Price of Name is 10.00');
        });

        it('Test with year 1981', () => {
            expect(library.calcPriceOfBook('Name', 1981)).to.equal('Price of Name is 20.00');
        });

        it('Test with year 2000', () => {
            expect(library.calcPriceOfBook('Name', 2000)).to.equal('Price of Name is 20.00');
        });
    });

    describe('Test findBook', () => {
        it('Test length of the booksArr array is zero', () => {
            expect(() => library.findBook([],'Desired book')).to.throw('No books currently available');
        });

        it('Test: desired book is present in the array', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
        });

        it('Test: desired book is not present in the array', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Desired book')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('Test arrangeTheBooks', () => {
        it('Test with invalid input - 1', () => {
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => library.arrangeTheBooks([1])).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(() => library.arrangeTheBooks(2.5)).to.throw('Invalid input');
        });

        it('Test with invalid input - 4', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('Test with less than 40 books', () => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
        });

        it('Test with 40 books', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Test with more than 40 books', () => {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
})