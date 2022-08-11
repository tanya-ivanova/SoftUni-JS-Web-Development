const {expect, assert} = require('chai');
const{StringBuilder} = require('./string-builder'); 

describe('Testing the class StringBuilder', () => {
    let str;
    describe('Testing the constructor', () => {
        it('Should not throw an error if initialized with string', () => {
            expect(() => str = new StringBuilder('hello')).to.not.throw();
        });

        it('Should not throw an error if initialized with no param', () => {
            expect(() => str = new StringBuilder()).to.not.throw();
        });

        it('Should not throw an error if initialized with undefined', () => {
            expect(() => str = new StringBuilder(undefined)).to.not.throw();
        });

        it('Should not throw an error if initialized with empty string', () => {
            expect(() => str = new StringBuilder('')).to.not.throw();
        });

        it('Should throw an error if initialized with number', () => {
            expect(() => str = new StringBuilder(1)).to.throw();
        });

        it('Should throw an error if initialized with array', () => {
            expect(() => str = new StringBuilder([1, 2, 3])).to.throw();
        });
    });

    describe('Testing append', () => {
        it('Should not throw an error if param is a string', () => {
            str = new StringBuilder('hello');
            expect(() => str.append(' there')).to.not.throw();
        });

        it('Should throw an error if there is no param', () => {
            str = new StringBuilder('hello');
            expect(() => str.append()).to.throw();
        });

        it('Should throw an error if parameter is a number', () => {
            str = new StringBuilder('hello');
            expect(() => str.append(1)).to.throw();
        });

        it('Should throw an error if parameter is an array', () => {
            str = new StringBuilder('hello');
            expect(() => str.append(['one', 'two'])).to.throw();
        });

        it('Testing if append works correctly - 1', () => {
            str = new StringBuilder('hello');
            str.append(' there');
            expect(str.toString()).to.equal('hello there');
        });

        it('Testing if append works correctly - 2', () => {
            str = new StringBuilder('hello');
            str.append('there');
            expect(str.toString()).to.equal('hellothere');
        });

        it('Testing if append works correctly - 3', () => {
            str = new StringBuilder();
            str.append('there');
            expect(str.toString()).to.equal('there');
        });

        it('Testing if append works correctly - 4', () => {
            let sb = new StringBuilder('abc');
            let input1 = '123';
            let input2 = 'wow';
            let expected1 = 'abc123';
            let expected2 = 'abc123wow';
            
            sb.append(input1);
            expect(sb.toString()).to.equal(expected1);
            
            sb.append(input2);
            expect(sb.toString()).to.equal(expected2);

            let expected3 = 'abc123ww';
            sb.remove(7, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('Testing prepend', () => {
        it('Should not throw an error if param is a string', () => {
            str = new StringBuilder('hello');
            expect(() => str.prepend('Guys ')).to.not.throw();
        });

        it('Should throw an error if there is no param', () => {
            str = new StringBuilder('hello');
            expect(() => str.prepend()).to.throw();
        });

        it('Should throw an error if parameter is a number', () => {
            str = new StringBuilder('hello');
            expect(() => str.prepend(1)).to.throw();
        });

        it('Should throw an error if parameter is an array', () => {
            str = new StringBuilder('hello');
            expect(() => str.prepend(['one', 'two'])).to.throw();
        });

        it('Testing if prepend works correctly - 1 ', () => {
            str = new StringBuilder('hello');
            str.prepend('Guys ');
            expect(str.toString()).to.equal('Guys hello');
        });

        it('Testing if prepend works correctly - 2 ', () => {
            str = new StringBuilder('hello');
            str.prepend('Guys');
            expect(str.toString()).to.equal('Guyshello');
        });

        it('Testing if prepend works correctly - 3 ', () => {
            str = new StringBuilder();
            str.prepend('Guys');
            expect(str.toString()).to.equal('Guys');
        });

        it('Testing if prepend works correctly - 4', () => {
            let sb = new StringBuilder('abc');
            let input1 = '123';
            let input2 = 'wow';
            let expected1 = '123abc';
            let expected2 = 'wow123abc';
            
            sb.prepend(input1);
            expect(sb.toString()).to.equal(expected1);
            
            sb.prepend(input2);
            expect(sb.toString()).to.equal(expected2);

            let expected3 = 'wow23abc';
            sb.remove(3, 1);
            expect(sb.toString()).to.equal(expected3);
        });
    });

    describe('Testing insertAt', () => {
        it('Should not throw an error if first param is a string', () => {
            str = new StringBuilder('hello');
            expect(() => str.insertAt('my', 2)).to.not.throw();
        });

        it('Should throw an error if there are no params', () => {
            str = new StringBuilder('hello');
            expect(() => str.insertAt()).to.throw();
        });

        it('Should throw an error if first parameter is a number', () => {
            str = new StringBuilder('hello');
            expect(() => str.insertAt(1, 2)).to.throw();
        });

        it('Should throw an error if first parameter is an array', () => {
            str = new StringBuilder('hello');
            expect(() => str.insertAt(['one', 'two'], 3)).to.throw();
        });

        it('Testing if insertAt works correctly - 1', () => {
            str = new StringBuilder('hello');
            str.insertAt('my', 2);
            expect(str.toString()).to.equal('hemyllo');
        });

        it('Testing if insertAt works correctly - 2', () => {
            str = new StringBuilder('hello');
            str.insertAt('my', 0);
            expect(str.toString()).to.equal('myhello');
        });

        it('Testing if insertAt works correctly - 3', () => {
            str = new StringBuilder('hello');
            str.insertAt('my', 5);
            expect(str.toString()).to.equal('hellomy');
        });

        it('Testing if insertAt works correctly - 4', () => {
            str = new StringBuilder();
            str.insertAt('my', 5);
            expect(str.toString()).to.equal('my');
        });

        it('Testing if insertAt works correctly - 5', () => {
            let sb = new StringBuilder('test');
            let input1 = 'abc';
            let input2 = '123';
            let expected1 = 'testabc';
            let expected2 = 'testab123c';

            sb.insertAt(input1, 4);
            expect(sb.toString()).to.equal(expected1);

            sb.insertAt(input2, 6);
            expect(sb.toString()).to.equal(expected2);            
        });
        
    });

    describe('Testing remove', () => {
        it('Testing if remove works correctly - 1', () => {
            str = new StringBuilder('hello');
            str.remove(2, 2);
            expect(str.toString()).to.equal('heo');
        });

        it('Testing if remove works correctly - 2', () => {
            str = new StringBuilder('hello');
            str.remove(2, 10);
            expect(str.toString()).to.equal('he');
        });

        it('Testing if remove works correctly - 3', () => {
            str = new StringBuilder('hello');
            str.remove(2, 0);
            expect(str.toString()).to.equal('hello');
        });

        it('Testing if remove works correctly - 4', () => {
            str = new StringBuilder('hello');
            str.remove(0, 2);
            expect(str.toString()).to.equal('llo');
        });

        it('Testing if remove works correctly - 4', () => {
            str = new StringBuilder('hello');
            str.remove(4, 2);
            expect(str.toString()).to.equal('hell');
        });

        it('Testing if remove works correctly - 5', () => {
            str = new StringBuilder();
            str.remove(4, 2);
            expect(str.toString()).to.equal('');
        });
    });

    describe('Testing toString', () => {
        it('Should not throw an error if toString is called', () => {
            str = new StringBuilder('hello');
            str.remove(2, 2);
            expect(() => str.toString()).to.not.throw();
        });

        it('Testing if toString works correctly - 1', () => {
            str = new StringBuilder();            
            expect(() => str.toString()).to.not.throw();
        });

        it('Testing if toString works correctly - 2', () => {
            str = new StringBuilder();            
            expect(str.toString()).to.equal('');
        });

        it('Testing if toString works correctly - 3', () => {
            str = new StringBuilder('hello');            
            expect(str.toString()).to.equal('hello');
        });      

        
    });    
    
})