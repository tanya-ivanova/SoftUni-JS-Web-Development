class Company {
    constructor() {
        this.departments = {};
    }

    static Employee = class Employee {
        constructor(name, salary, position) {
            this.name = name;
            this.salary = salary;
            this.position = position;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._validateParameter(value); 
            this._name = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._validateParameter(value);

            if(value <= 0) {
                throw new Error('Invalid input!');
            }

            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            this._validateParameter(value); 
            this._position = value;
        }

        _validateParameter(value) {
            if(value === '' || value === undefined || value === null) {
                throw new Error('Invalid input!');
            }
        }

        compareTo(otherObj) {
            let result = otherObj.salary - this.salary;
            return result === 0 ? this.name.localeCompare(otherObj.name) : result;
        }

        toString() {
            return `${this.name} ${this.salary} ${this.position}`;
        }
    }    

    addEmployee(name, salary, position, department) {
        
        if(department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        }

        let worker = new Company.Employee(name, salary, position);

        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push(worker);

        return `New employee is hired. Name: ${worker.name}. Position: ${worker.position}`;        
        
    }

    bestDepartment() {

        function calculateAverageSalaty(arr) {
            let totalSalary = arr.reduce((prev, curr) => prev + curr.salary, 0);            
            let averageSalary = totalSalary / arr.length;
            return averageSalary;
        }

        let bestDepartment = '';
        let bestAverageSalary = 0;

        for(let department in this.departments) {
            let average = calculateAverageSalaty(this.departments[department]);
            if(average > bestAverageSalary) {
                bestAverageSalary = average;
                bestDepartment = department;
            }
        }
        
        let sorted = this.departments[bestDepartment].sort((a, b) => a.compareTo(b));
        
        let output = [`Best Department is: ${bestDepartment}`];
        output.push(`Average salary: ${bestAverageSalary.toFixed(2)}`);

        sorted.forEach(element => {            
            output.push(element.toString());
        });

        return output.join('\n');
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let bd = c.bestDepartment();
console.log(bd);

