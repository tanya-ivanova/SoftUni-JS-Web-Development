function solve(input) {
    let worker1 = Number(input.shift());
    let worker2 = Number(input.shift());
    let worker3 = Number(input.shift());

    let studentsQuestions = Number(input.shift());
    let questionsPerHour = worker1 + worker2 + worker3;
    let hours = 0;
    let currentHour = 0;

    for (let i = studentsQuestions; i > 0; i -= questionsPerHour) {
        
        if (currentHour === 3) {
            hours++;
            currentHour = 0;
        }
        currentHour++;
        hours++;
        
    }
    console.log(`Time needed: ${hours}h.`);
}

solve(['1','1','1','9']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);