function formatGrade (grade) {
    let description = "";
    let formattedGrade;

    if (grade < 3) {
        description = "Fail"
        formattedGrade = 2;
    } else if (grade < 3.50) {
        description = "Poor";
        formattedGrade = grade.toFixed(2);
    } else if (grade < 4.50) {
        description = "Good";
        formattedGrade = grade.toFixed(2);
    } else if (grade < 5.50) {
        description = "Very good";
        formattedGrade = grade.toFixed(2);
    } else {
        description = "Excellent";
        formattedGrade = grade.toFixed(2);
    }

    console.log(`${description} (${formattedGrade})`);
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);