function schoolGradesWithMap(input) {
    let gradesMap = new Map();

    for (let line of input) {
        let [name, ...grades] = line.split(" ");
        grades = grades.map(Number);

        if(!gradesMap.has(name)) {
            gradesMap.set(name, grades);
        } else {
            let currentGrades = gradesMap.get(name);
            for (let grade of grades) {
                currentGrades.push(grade);                
            }
        }        
    }
    let gradesArray = Array.from(gradesMap.entries());
    gradesArray.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let arr of gradesArray) {
        let grades = arr[1];
        let sumGrades = 0;

        for (let grade of grades) {
            sumGrades += grade;
        }
        let averageGrade = sumGrades / grades.length;
        console.log(`${arr[0]}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGradesWithMap(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);