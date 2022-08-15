function solve(input) {
    let days = Number(input.shift());
    let totalLiters = 0;
    let totalGrade = 0;

    for(let i = 0; i < days * 2; i += 2) {
        let liters = Number(input[i]);
        let grade = Number(input[i + 1]);

        totalLiters += liters;
        totalGrade += liters * grade;
    }

    let finalGrade = totalGrade / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${finalGrade.toFixed(2)}`);

    if(finalGrade < 38) {
        console.log('Not good, you should baking!');
    } else if(finalGrade >= 38 && finalGrade <= 42) {
        console.log('Super!');
    } else if(finalGrade > 42) {
        console.log('Dilution with distilled water!');
    }
}

solve(["2",
"200",
"43",
"200",
"40"]);
