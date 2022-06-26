function softUniReception (input) {
    let [employeOneStudentsPerHour, employeTwoStudentsPerHour, employeThreeStudentsPerHour, students] = input;
    let employesStudentsPerHour = Number(employeOneStudentsPerHour) 
    + Number(employeTwoStudentsPerHour) + Number(employeThreeStudentsPerHour);
    students = Number(students);

    let hoursNeeded = 0;
    let counter = 0

    while (students > 0) {
        students = students - employesStudentsPerHour;
        hoursNeeded++;
        counter++;
        if (counter === 3 && students !== 0) {
            hoursNeeded++;
            counter = 0;
        }
    }
    console.log(`Time needed: ${hoursNeeded}h.`);
}

softUniReception(['1','2','3','36']);
softUniReception(['5','6','4','20']);
softUniReception(['3','2','5','40']);