function bonusScoringSystem (input) {
    let numberOfStudents = Number(input.shift());
    let lectures = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let studentAttendances = input.map(Number);
    let maxAttendances = Math.max(...studentAttendances);
    
    let totalBonus = maxAttendances / lectures * (5 + additionalBonus);
    totalBonus = Math.ceil(totalBonus);

    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);