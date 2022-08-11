class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if(name === '' || name === undefined || name === null) {
            throw new Error('"Invalid input!"');
        }

        if(salary <= 0 || salary === undefined || salary === null) {
            throw new Error('"Invalid input!"');
        }

        if(position === '' || position === undefined || position === null) {
            throw new Error('"Invalid input!"');
        }

        if(department === '' || department === undefined || department === null) {
            throw new Error('"Invalid input!"');
        }

        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        let employee = {
            name,
            salary,
            position
        }

        this.departments[department].push(employee);      
        
        return `New employee is hired. Name: ${name}. Position: ${position}`;
        
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAverageSalary = 0;

        for(let department in this.departments) {
            let totalSalary = 0;
            for(let employee of this.departments[department]) {
                totalSalary += employee.salary;
            }
            let averageSalary = totalSalary / this.departments[department].length;
            
            if(averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }
        let sorted = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        let output = `Best Department is: ${bestDepartment}` + '\n';
        output += `Average salary: ${bestAverageSalary.toFixed(2)}` + '\n';
        
        for(let i = 0; i < sorted.length; i++) {
            let employee = sorted[i];
            
            if(i < sorted.length - 1) {
                output += `${employee.name} ${employee.salary} ${employee.position}` + '\n';
            } else {
                output += `${employee.name} ${employee.salary} ${employee.position}`;
            }
        }
        
        return output;
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
console.log(act);