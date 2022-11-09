const {expect} = require('chai');
const {bookSelection} = require('./bookSelection');

describe('Test bookSelection', () => {
    describe('Test isGenreSuitable', () => {
        it('Test genre Thriller and age less than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
        });

        it('Test genre Thriller and age 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
        });

        it('Test genre Horror and age less than 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        });

        it('Test genre Horror and age 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it('Test genre Thriller and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
        });

        it('Test genre Horror and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal('Those books are suitable');
        });

        it('Test genre Fantasy and age less than 12', () => {
            expect(bookSelection.isGenreSuitable('Fantasy', 10)).to.equal('Those books are suitable');
        });

        it('Test genre Fantasy and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Fantasy', 15)).to.equal('Those books are suitable');
        });
    });

    describe('Test isItAffordable', () => {
        it('Test with invalid input price - 1', () => {
            expect(() => bookSelection.isItAffordable('10', 50)).to.throw('Invalid input');
        });

        it('Test with invalid input price - 2', () => {
            expect(() => bookSelection.isItAffordable([], 50)).to.throw('Invalid input');
        });

        it('Test with invalid input budget - 1', () => {
            expect(() => bookSelection.isItAffordable(10, '50')).to.throw('Invalid input');
        });

        it('Test with invalid input budget - 2', () => {
            expect(() => bookSelection.isItAffordable(10, [])).to.throw('Invalid input');
        });

        it('Test with not enough money', () => {
            expect(bookSelection.isItAffordable(50, 30)).to.equal("You don't have enough money");
        });

        it('Test with enough money', () => {
            expect(bookSelection.isItAffordable(10, 30)).to.equal('Book bought. You have 20$ left');
        });

        it('Test with enough money - edge case', () => {
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
        });
    });

    describe('Test suitableTitles', () => {
        it('Test with invalid input for books', () => {
            expect(() => bookSelection.suitableTitles('thriller', 'fantasy')).to.throw('Invalid input');
        });

        it('Test with invalid input for wantedGenre', () => {
            expect(() => bookSelection.suitableTitles(['thriller', 'horror'], 10)).to.throw('Invalid input');
        });

        it('Test with valid input - 1', () => {
            expect(bookSelection.suitableTitles([{ title: 'The Da Vinci Code', genre: 'Thriller' }, {title: 'Foundation', genre: 'Fantasy'}], 'Fantasy')).to.deep.equal(['Foundation']);
        });

        it('Test with valid input - 2', () => {
            expect(bookSelection.suitableTitles([{ title: 'The Da Vinci Code', genre: 'Thriller' }, {title: 'Foundation', genre: 'Fantasy'}], 'Comedy')).to.deep.equal([]);
        });
    });
})