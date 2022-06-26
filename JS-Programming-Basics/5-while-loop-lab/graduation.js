function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let gradeCounter = 1;
    let totalPoints = 0;
    let excluded = 0;

    while(gradeCounter <= 12) {
        let points = Number(input[index]);
        index++;
        if (points < 4) {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${gradeCounter - 1} grade`);
                break;
            }
        }
        gradeCounter++;
        totalPoints = totalPoints + points;
    }
    let avarageGrade = (totalPoints / 12).toFixed(2);
    if(excluded <= 1) {
        console.log(`${name} graduated. Average grade: ${avarageGrade}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);