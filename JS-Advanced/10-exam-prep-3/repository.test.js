const {expect} = require('chai');
let { Repository } = require('./repository');

describe('Test Repository', () => {
    describe('Test add', () => {
        it('Test with valid input and invalid input', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };
    
            let entity3 = {            
                age: 28,
                birthday: new Date(1990, 6, 8)
            };
    
            let entity4 = {
                name: "Gosho",
                age: '34',
                birthday: 1998
            };

            let entity5 = {                
                birthday: new Date(1983, 0, 8)
            };

            let entity6 = {
                name1: "Gosho",
                age: 34,
                birthday: 1998
            };

            expect(repository.add(entity1)).to.equal(0);
            expect(repository.add(entity2)).to.equal(1);
            expect(() => repository.add(entity3)).to.throw('Property name is missing from the entity!');
            expect(() => repository.add(entity4)).to.throw('Property age is not of correct type!');
            expect(() => repository.add(entity5)).to.throw('Property name is missing from the entity!');
            expect(() => repository.add(entity6)).to.throw('Property name is missing from the entity!');
        });
        
    });

    describe('Test getId', () => {
        it('Test getId', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };

            repository.add(entity1);
            repository.add(entity2);
            expect(repository.getId(0)).to.deep.equal({
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            expect(repository.getId(1)).to.deep.equal({
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            });
            expect(() => repository.getId(2)).to.throw('Entity with id: 2 does not exist!');
            expect(() => repository.getId(10)).to.throw('Entity with id: 10 does not exist!');
            expect(() => repository.getId(-4)).to.throw('Entity with id: -4 does not exist!');
            expect(() => repository.getId('1')).to.throw('Entity with id: 1 does not exist!');
        });

        it('Test getId with empty data', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);          
            
            expect(() => repository.getId(0)).to.throw('Entity with id: 0 does not exist!');
        });
            
    });

    describe('Test update', () => {
        it('Test update with valid and invalid input', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };

            let newEntity1 = {                
                    name: "Ivan",
                    age: 40,
                    birthday: new Date(1983, 2, 2)            
            };

            let newEntity2 = {                
                name: "Ico",
                age: '42',
                birthday: new Date(1981, 2, 2)            
            };

            let newEntity3 = {                
                name: "Miro",
                age: 19                            
            };

            let newEntity4 = {               
                name: "Miro"                                            
            };

            let newEntity5 = {                
                name: 1,
                age: '42',
                birthday: new Date(1981, 2, 2)            
            };

            repository.add(entity1);
            repository.add(entity2);

            repository.update(0, newEntity1);
            expect(repository.getId(0)).to.deep.equal({                
                name: "Ivan",
                age: 40,
                birthday: new Date(1983, 2, 2)            
            });

            repository.update(0, entity1);
            expect(repository.getId(0)).to.deep.equal({                
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)            
            });

            repository.update(1, newEntity1);
            expect(repository.getId(1)).to.deep.equal({                
                name: "Ivan",
                age: 40,
                birthday: new Date(1983, 2, 2)            
            });
            
            expect(() => repository.update(0, newEntity2)).to.throw('Property age is not of correct type!');
            expect(() => repository.update(1, newEntity5)).to.throw('Property name is not of correct type!');
            expect(() => repository.update(0, newEntity3)).to.throw('Property birthday is missing from the entity!');
            expect(() => repository.update(1, newEntity4)).to.throw('Property age is missing from the entity!');
            expect(() => repository.update(3, newEntity1)).to.throw('Entity with id: 3 does not exist!');
            expect(() => repository.update(-1, newEntity1)).to.throw('Entity with id: -1 does not exist!');
            expect(() => repository.update('3', newEntity1)).to.throw('Entity with id: 3 does not exist!');

            repository.del(1);
            expect(() => repository.update(1, newEntity1)).to.throw('Entity with id: 1 does not exist!');
            repository.add(newEntity1);
            repository.add(newEntity1);
            expect(repository.getId(2)).to.deep.equal({                
                name: "Ivan",
                age: 40,
                birthday: new Date(1983, 2, 2)            
            });
            expect(repository.getId(3)).to.deep.equal({                
                name: "Ivan",
                age: 40,
                birthday: new Date(1983, 2, 2)            
            });
            expect(repository.count).to.equal(3);

        });

        it('Test update with empty data', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            }; 
                    
            expect(() => repository.update(0, entity1)).to.throw('Entity with id: 0 does not exist!');                       

        });
    });

    describe('Testing del', () => {
        it('Testing del with valid and invalid input', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };

            let entity3 = {
                name: "Ivan",
                age: 25,
                birthday: new Date(1993, 0, 8)
            };

            repository.add(entity1);
            repository.add(entity2);
            repository.del(0);

            expect(repository.getId(1)).to.deep.equal({
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            });
            expect(() => repository.getId(0)).to.throw('Entity with id: 0 does not exist!');
            expect(() => repository.getId(5)).to.throw('Entity with id: 5 does not exist!');
            expect(() => repository.getId('one')).to.throw('Entity with id: one does not exist!');

            repository.del(1);
            expect(repository.add(entity3)).to.equal(2);
            expect(repository.count).to.equal(1);

        });

        it('Testing del with empty data', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);

            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };

            let entity3 = {
                name: "Ivan",
                age: 25,
                birthday: new Date(1993, 0, 8)
            };
                                  
            expect(() => repository.del(0)).to.throw('Entity with id: 0 does not exist!');
            repository.add(entity1);
            repository.add(entity2);
            repository.update(1, entity3);
            repository.del(0);
            repository.del(1);
            expect(() => repository.del(0)).to.throw('Entity with id: 0 does not exist!');
            expect(repository.count).to.equal(0);
            
        });
    });

    describe('Test count', () => {
        it('Test count', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            
            let repository = new Repository(properties);
            
            let entity1 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
    
            let entity2 = {
                name: "Gosho",
                age: 34,
                birthday: new Date(1983, 0, 8)
            };

            expect(repository.count).to.equal(0);
            repository.add(entity1);
            repository.add(entity2);
            expect(repository.count).to.equal(2);
            repository.del(0);
            expect(repository.count).to.equal(1);
            repository.update(1, entity1);
            expect(repository.count).to.equal(1);
        });
    });
})
