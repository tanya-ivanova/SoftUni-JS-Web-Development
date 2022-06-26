function employees (input) {
    let employeesArr = [];

    for(let i = 0; i < input.length; i++) {
        let name = input[i];
        let perssonalNumber = name.length;
        let employee = {
            name,
            perssonalNumber
        }
        employeesArr.push(employee);        
    }
    employeesArr.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.perssonalNumber}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);