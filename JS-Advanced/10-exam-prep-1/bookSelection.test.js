const {expect} = require('chai');
const {bookSelection} = require('./bookSelection');

describe('Test bookSelection', () => {
    describe('Test isGenreSuitable', () => {
        it('Test isGenreSuitable with Thriller and 1', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal('Books with Thriller genre are not suitable for kids at 1 age');
        });
    
        it('Test isGenreSuitable with Thriller and 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        });
    
        it('Test isGenreSuitable with Horror and 1', () => {
            expect(bookSelection.isGenreSuitable('Horror', 1)).to.equal('Books with Horror genre are not suitable for kids at 1 age');
        });
    
        it('Test isGenreSuitable with Thriller and 15', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
        });

        it('Test isGenreSuitable with Thriller and 13', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        });
    
        it('Test isGenreSuitable with Horror and 13', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });

        it('Test isGenreSuitable with Horror and 20', () => {
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
        });
    
        it('Test isGenreSuitable with Horror and 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
    
        it('Test isGenreSuitable with Animals and 1', () => {
            expect(bookSelection.isGenreSuitable('Animals', 1)).to.equal('Those books are suitable');
        });
    
        it('Test isGenreSuitable with Animals and 12', () => {
            expect(bookSelection.isGenreSuitable('Animals', 12)).to.equal('Those books are suitable');
        });
    
        it('Test isGenreSuitable with Animals and 15', () => {
            expect(bookSelection.isGenreSuitable('Animals', 15)).to.equal('Those books are suitable');
        });

        it('Test isGenreSuitable with Animals and -1', () => {
            expect(bookSelection.isGenreSuitable('Animals', -1)).to.equal('Those books are suitable');
        });
    });
    describe('Test isItAffordable', () => {
        it('Test with invalid input for price - 1', () => {
            expect(() => bookSelection.isItAffordable('two', 5).to.throw('Invalid input'));
        });

        it('Test with invalid input for price - 2', () => {
            expect(() => bookSelection.isItAffordable('[1, 3, 5]', 5).to.throw('Invalid input'));
        });

        it('Test with invalid input for price - 3', () => {
            expect(() => bookSelection.isItAffordable(NaN, 5).to.throw('Invalid input'));
        });

        it('Test with invalid input for budget - 1', () => {
            expect(() => bookSelection.isItAffordable(1, 'two').to.throw('Invalid input'));
        });

        it('Test with invalid input for budget - 2', () => {
            expect(() => bookSelection.isItAffordable(5, '[1, 3, 5]').to.throw('Invalid input'));
        });

        it('Test with invalid input for budget - 3', () => {
            expect(() => bookSelection.isItAffordable(10, NaN).to.throw('Invalid input'));
        }); 

        it('Test with invalid input for price and budget - 1', () => {
            expect(() => bookSelection.isItAffordable('2', 'zero').to.throw('Invalid input'));
        });
        
        it('Test input with negative numbers', () => {
            expect(() => bookSelection.isItAffordable(-10, -20).not.to.throw('Invalid input'));
        });

        it('Test input with decimal numbers', () => {
            expect(() => bookSelection.isItAffordable(10.5, 20.8).not.to.throw('Invalid input'));
        });

        it('Test with price bigger than budget - 1', () => {
            expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
        });

        it('Test with price bigger than budget - 2', () => {
            expect(bookSelection.isItAffordable(0, -10)).to.equal("You don't have enough money");
        });

        it('Test with price equal to budget', () => {
            expect(bookSelection.isItAffordable(20, 20)).to.equal('Book bought. You have 0$ left');
        });

        it('Test with price lower than budget - 1', () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
        });

        it('Test with price lower than budget - 2', () => {
            expect(bookSelection.isItAffordable(10.5, 20.8)).to.equal('Book bought. You have 10.3$ left');
        });
    });

    describe('Test suitableTitles', () => {
        it('Test with invalid input for books - 1', () => {
            expect(() => bookSelection.suitableTitles(1, 'Thriller')).to.throw('Invalid input');
        });

        it('Test with invalid input for books - 2', () => {
            expect(() => bookSelection.suitableTitles('1', 'Thriller')).to.throw('Invalid input');
        });

        it('Test with invalid input for books - 3', () => {
            expect(() => bookSelection.suitableTitles({book: 'hello'}, 'Thriller')).to.throw('Invalid input');
        });

        it('Test with invalid input for wantedGenre - 1', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            expect(() => bookSelection.suitableTitles(books, 1)).to.throw('Invalid input');
        });

        it('Test with invalid input for wantedGenre - 2', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            expect(() => bookSelection.suitableTitles(books, {book: 1})).to.throw('Invalid input');
        });

        it('Test with invalid input for wantedGenre - 3', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            expect(() => bookSelection.suitableTitles(books, [1, 2, 3])).to.throw('Invalid input');
        });

        it('Test valid input - 1', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Thriller';
            expect(() => bookSelection.suitableTitles(books, wantedGenre)).not.to.throw('Invalid input');
        });

        it('Test valid input - 2', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'Thriller';
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal(['The Da Vinci Code']);
        });

        it('Test valid input - 3', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" }];
            let wantedGenre = 'a';
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal([]);
        });

        it('Test valid input - 4', () => {
            let books = [{ title: "The Da Vinci Code", genre: 'a' }, {title: 'aa', genre: 'a'}];
            let wantedGenre = 'a';
            expect(bookSelection.suitableTitles(books, wantedGenre)).to.deep.equal(['The Da Vinci Code', 'aa']);
        });
    });
})

