function examPreparation(input) {
    let index = 0;
    let numberOfPoorGrades = Number(input[index]);
    index++;
    let problemCounter = 0;
    let poorGradesCounter = 0;
    let totalScore = 0;
    let needBreak = false;
    let problemName = "";

    while(input[index] !== "Enough") {
        problemName = input[index];
        index++;
        let problemScore = Number(input[index]);
        index++;
        problemCounter++;
        totalScore = totalScore + problemScore;

        if (problemScore <= 4) {
            poorGradesCounter++;
            if (poorGradesCounter === numberOfPoorGrades) {
                console.log(`You need a break, ${numberOfPoorGrades} poor grades.`);
                needBreak = true;
                break;
            }
        }
    }
    let averageScore = (totalScore / problemCounter).toFixed(2);
    if(!needBreak) {
        console.log(`Average score: ${averageScore}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${problemName}`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);