function solve(data, criteriaInput) {
    let employees = JSON.parse(data);
    let criteria = criteriaInput.split('-');    
    let employeesMeetCriteria = [];

    for (let employee of employees) {
        if(employee[criteria[0]] === criteria[1]) {
            employeesMeetCriteria.push(employee);
        }
    }

    for (let i = 0; i < employeesMeetCriteria.length; i++) {
        console.log(`${i}. ${employeesMeetCriteria[i].first_name} ${employeesMeetCriteria[i].last_name} - ${employeesMeetCriteria[i].email}`);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all');