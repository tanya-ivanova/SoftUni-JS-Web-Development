function trainTheTrainers(input) {
    index = 0;
    let numberOfPeople = Number(input[index]);
    index++;
    let totalGrades = 0;
    let counterGrades = 0;

    while(input[index] !== "Finish") {
        let presentation = input[index];
        index++;
        let gradesForPresentation = 0;
        for (let i = 0; i < numberOfPeople; i++) {         
             let grade = Number(input[index]);
             index++;
             totalGrades = totalGrades + grade;
             gradesForPresentation = gradesForPresentation + grade;
             counterGrades++;
        }
        let avarageGradeForPresentation = (gradesForPresentation / numberOfPeople).toFixed(2);
        console.log(`${presentation} - ${avarageGradeForPresentation}.`);
    }
    let avarageFinalAssessment = (totalGrades / counterGrades).toFixed(2);
    console.log(`Student's final assessment is ${avarageFinalAssessment}.`);
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);