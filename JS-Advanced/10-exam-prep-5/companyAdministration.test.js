const {expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');

describe('Test companyAdministration', () => {
    describe('Test hiringEmployee', () => {
        it('Test with position different from Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Jonh', 'HR', 10)).to.throw('We are not looking for workers for this position.');
        });

        it('Test with Programmer with 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('Maria', 'Programmer', 3)).to.equal('Maria was successfully hired for the position Programmer.');
        });

        it('Test with Programmer with 5 years experience', () => {
            expect(companyAdministration.hiringEmployee('Maria', 'Programmer', 5)).to.equal('Maria was successfully hired for the position Programmer.');
        });

        it('Test with Programmer with 1 years experience', () => {
            expect(companyAdministration.hiringEmployee('Maria', 'Programmer', 1)).to.equal('Maria is not approved for this position.');
        });
    });

    describe('Test calculateSalary', () => {
        it('Test with invalid input - 1', () => {
            expect(() => companyAdministration.calculateSalary('10')).to.throw('Invalid hours');
        });

        it('Test with invalid input - 2', () => {
            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
        });

        it('Test with invalid input - 3', () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw('Invalid hours');
        });

        it('Test with hours less than 160', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
        });

        it('Test with hours 160', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('Test with hours more than 160', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });

    describe('Test firedEmployee', () => {
        it('Test with invalid input - 1', () => {
            expect(() => companyAdministration.firedEmployee(10, 1)).to.throw('Invalid input');
        });

        it('Test with invalid input - 2', () => {
            expect(() => companyAdministration.firedEmployee([10], '1')).to.throw('Invalid input');
        });

        it('Test with invalid input - 3', () => {
            expect(() => companyAdministration.firedEmployee([10, 20, 30], -1)).to.throw('Invalid input');
        });

        it('Test with invalid input - 4', () => {
            expect(() => companyAdministration.firedEmployee([10, 20, 30], 3)).to.throw('Invalid input');
        });

        it('Test with invalid input - 5', () => {
            expect(() => companyAdministration.firedEmployee([10, 20, 30], 1.5)).to.throw('Invalid input');
        });

        it('Test with valid input - 1', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
        });

        it('Test with valid input - 2', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });

        it('Test with valid input - 3', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
        });

        it('Test with valid input - 4', () => {
            expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
        });
    });
})