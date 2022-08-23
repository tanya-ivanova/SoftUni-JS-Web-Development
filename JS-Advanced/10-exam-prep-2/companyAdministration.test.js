const {expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');

describe('Test companyAdministration', () => {
    describe('Test hiringEmployee', () => {
        it('Test with Programmer and 5 years experience', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5)).to.equal('Ivan was successfully hired for the position Programmer.');
        });

        it('Test with Programmer and 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal('Ivan was successfully hired for the position Programmer.');
        });

        it('Test with Programmer and less than 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal('Ivan is not approved for this position.');
        });

        it('Test with position different from Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Ivan', 'HR', 5)).to.throw('We are not looking for workers for this position.');
        });
    });

    describe('Test calculateSalary', () => {
        it('Test with valid input less than 160 hours', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        });

        it('Test with valid input more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });

        it('Test with valid input - 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('Test with valid input - 0 hours', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('Test with invalid input - string', () => {
            expect(() => companyAdministration.calculateSalary('10')).to.throw('Invalid hours');
        });

        it('Test with invalid input - array', () => {
            expect(() => companyAdministration.calculateSalary([10, 12])).to.throw('Invalid hours');
        });

        it('Test with invalid input - negative number', () => {
            expect(() => companyAdministration.calculateSalary(-100)).to.throw('Invalid hours');
        });
    });

    describe('Test firedEmployee', () => {
        it('Test with valid input - 1', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
        });

        it('Test with valid input - 2', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });

        it('Test with valid input - 3', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
        });

        it('Test with invalid input - 1', () => {
            expect(() => companyAdministration.firedEmployee('Ivan Petar Martin', 1)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '1')).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
        });

        it('Test with invalid input - 4', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw('Invalid input');
        });
    });
})