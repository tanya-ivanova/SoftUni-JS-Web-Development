function bonusScoringSystem2 (input) {
    let numberOfStudents = Number(input.shift());
    let lectures = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let studentAttendances = input.map(Number);
    let attendancesOfMaxBonusStudent = 0;
    let maxBonus = 0;

    for (let i = 0; i < studentAttendances.length; i++) {
        let bonus = studentAttendances[i] / lectures * (5 + additionalBonus);
        
        if (bonus > maxBonus) {
            maxBonus = bonus;
            attendancesOfMaxBonusStudent = studentAttendances[i];
        }        
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendancesOfMaxBonusStudent} lectures.`);
}

bonusScoringSystem2([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);