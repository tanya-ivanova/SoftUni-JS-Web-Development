function schoolGrades (input) {
    let gradesObj = {};

    for (let line of input) {
        let [name, ...grades] = line.split(" ");
        grades = grades.map(Number);
        
        if (!gradesObj.hasOwnProperty(name)) {
            gradesObj[name] = grades;
        } else {
            let currentGrades = gradesObj[name];
            for (let grade of grades) {
                currentGrades.push(grade);
            }
        }
    }
    let sortedGradesArr = Object.entries(gradesObj);
    sortedGradesArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let arr of sortedGradesArr) {
        let grades = arr[1];
        let sumGrades = 0;
        for (let grade of grades) {
            sumGrades += grade;
        }
        let averageGrade = sumGrades / grades.length;

        console.log(`${arr[0]}: ${averageGrade.toFixed(2)}`);
    } 
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);