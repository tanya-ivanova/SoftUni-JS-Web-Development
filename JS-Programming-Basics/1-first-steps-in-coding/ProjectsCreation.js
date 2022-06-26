function createProject(input) {
    let architectName = input[0];
    let numberOfProjects = Number(input[1]);
    let totalHoursNeeded = numberOfProjects * 3;
    console.log(`The architect ${architectName} will need ${totalHoursNeeded} hours to complete ${numberOfProjects} project/s.`);
}

createProject(["George", "4"]);