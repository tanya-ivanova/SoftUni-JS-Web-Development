function calculateSalary(input) {
    let index = 0
    let numberWebsites = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++;
    let isHaveSalary = true;

    for (let i = index; i <= numberWebsites; i++) {
        let website = input[index];
        index++;
        switch(website) {
            case "Facebook":
                salary = salary - 150;
                break;
            case "Instagram":
                salary = salary - 100;
                break;
            case "Reddit":
                salary = salary - 50;
                break;
        }     
              
        if (salary <= 0) {
            console.log("You have lost your salary.");
            isHaveSalary = false;
            break;
        }                
    }
    if (isHaveSalary){
        console.log(Math.floor(salary));
    }   
}

calculateSalary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);