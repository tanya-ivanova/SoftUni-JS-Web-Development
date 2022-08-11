const {expect, assert} = require('chai');
const {PaymentPackage} = require('./PaymentPackage');

describe('Testing class PaymentPackage', () => {
    let package;    

    describe('Tests for the Name', () => {
        it('constructor test', () => {
            let instance = new PaymentPackage('Name', 100);

            assert.equal(instance._name, 'Name');
            assert.equal(instance._value, 100,);
            assert.equal(instance._VAT, 20);
            assert.equal(instance._active, true);
        }); 

        it('Creates object with valid name and value)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(package.name).to.equal('HR Services');
        });

        it('Throws an error if object is initialised with empty string', () => {
            expect(() => package = new PaymentPackage('', 1500)).to.throw();        
        });

        it('Throws an error if object is initialised only with value', () => {
            expect(() => package = new PaymentPackage(1500)).to.throw();        
        });
        
        it('Throws an error if object is initialised with number for the name', () => {
            expect(() => package = new PaymentPackage(0, 1500)).to.throw();        
        });

        it('Throws an error if object is initialised with array for the name', () => {
            expect(() => package = new PaymentPackage([1, 2, 4], 1500)).to.throw();        
        });

        it('Throws an error if name is changed to empty string)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.name = '').to.throw();
        });

        it('Throws an error if name is changed to number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.name = 1).to.throw();
        });

    });
     
    describe('Tests for the Value', () => {

        it('Creates object with valid name and value' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(package.value).to.equal(1500);
        });
    
        it('Should create object with valid name and value' , () => {        
            expect(() => package = new PaymentPackage('HR Services', 1500).to.not.throw());
        });
    
        it('Creates object with name(non-empty string) and value 0' , () => {        
            expect(() => package = new PaymentPackage('HR Services', 0).to.not.throw());
        });    
    
        it('Throws an error if object is initialised only with name', () => {
            expect(() => package = new PaymentPackage('HR Services')).to.throw();        
        });  
       
        it('Throws an error if object is initialised with string for the value', () => {
            expect(() => package = new PaymentPackage('HR Services', '1500')).to.throw();        
        });
    
        it('Throws an error if object is initialised with array for the value', () => {
            expect(() => package = new PaymentPackage('HR Services', [0, 5, 6])).to.throw();        
        });
    
        it('Throws an error if object is initialised with negative number for the value', () => {
            expect(() => package = new PaymentPackage('HR Services', -1500)).to.throw();        
        });    
    
        it('Throws an error if value is changed to negative number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.value = -1).to.throw();
        });
    
        it('Throws an error if value is changed to string)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.value = '1').to.throw();
        });

        it('Should not throw an error if value is set to 0)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.value = 0).to.not.throw();
        });

    });

    describe('Tests for the VAT', () => {

        it('Sets the VAT with positive number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.VAT = 10;
            expect(package.VAT).to.equal(10);
        });
    
        it('Does not throws an error if VAT is positive number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.VAT = 30).to.not.throw();
        });
    
        it('Does not throws an error if VAT is 0)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.VAT = 0).to.not.throw();
        });
    
        it('Throws an error if VAT is string)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.VAT = 'zero').to.throw();
        });
    
        it('Throws an error if VAT is array)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.VAT = [5, 4, 1]).to.throw();
        });
    
        it('Throws an error if VAT is negative number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.VAT = -10).to.throw();
        });
    
        it('Throws an error if VAT is changed to negative number)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.VAT = 10;
            expect(() => package.VAT = -10).to.throw();
        });
    
        it('Throws an error if VAT is changed to string)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.VAT = 10;
            expect(() => package.VAT = 'one').to.throw();
        });
    })

    describe('Tests for the active', () => {

        it('Sets active with true)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.active = true;
            expect(package.active).to.equal(true);
        });
    
        it('Sets active with false)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            expect(package.active).to.equal(false);
        });
    
        it('Does not throw an error if active is  boolean)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.active = true).to.not.throw();
        });
    
        it('Throws an error if active is string)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.active = 'active').to.throw();
        });
    
        it('Throws an error if active is array)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(() => package.active = [0, 4, 3]).to.throw();
        });

        it('Should throw an error when the active is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = -123).to.throw();
        });
    
        it('Throws an error if active is changed to not boolean)' , () => {
            package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            expect(() => package.active = 1).to.throw();
        });
    });

    describe('Tests for the toString method', () => {

        it('toString method works with with active', () => {
            package = new PaymentPackage('HR Services', 1500);
            expect(package.toString()).to.equal(`Package: ${package.name}\n- Value (excl. VAT): ${package.value}\n- Value (VAT ${package.VAT}%): ${package.value * (1 + package.VAT / 100)}`)
        });
    
        it('toString method works with inactive', () => {
            package = new PaymentPackage('HR Services', 1500);
            package.active = false;
            expect(package.toString()).to.equal(`Package: ${package.name} (inactive)\n- Value (excl. VAT): ${package.value}\n- Value (VAT ${package.VAT}%): ${package.value * (1 + package.VAT / 100)}`)
        });
    
        it('Should return a string as all the input is correct - 1', () => {
            let flagClass = new PaymentPackage('abc', 123);
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    
        it('Should return a string as all the input is correct - 2', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    
        it('Should return a string as all the input is correct - 3', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    
        it('Should return a string as all the input is correct - 4', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });  
    
})