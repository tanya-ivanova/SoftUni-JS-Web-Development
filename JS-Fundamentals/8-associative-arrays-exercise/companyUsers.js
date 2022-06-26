function companyUsers (input) {
    let companyRegister = {};

    for (let line of input) {
        let [company, user] = line.split(" -> ");
        if(companyRegister.hasOwnProperty(company) === false) {
            companyRegister[company] = new Set();
        }
        companyRegister[company].add(user);
    }
    let entries = Object.entries(companyRegister);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [company, users] of entries) {
        console.log(company);
        for (let user of users) {
            console.log(`-- ${user}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])