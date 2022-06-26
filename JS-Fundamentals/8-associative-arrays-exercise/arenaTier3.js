function arenaTier3(input) {
    let gladiators = {};

    while(input[0] !== "Ave Cesar") {
        let line = input.shift();

        if (line.includes("->")) {
            let [name, technique, skill] = line.split(" -> ");
            skill = Number(skill);
            
            if(!gladiators.hasOwnProperty(name)) {
                gladiators = {
                    ...gladiators,                    
                    [name]: {
                        totalSkill: skill,
                        [technique]: skill
                    }                   
                } 
                /*gladiators[name] = { 
                    totalSkill: skill,                   
                    [technique]: skill
                }*/
                
                //console.log(gladiators);               
            } 
            else {
                if(!gladiators[name].hasOwnProperty(technique)) {
                    gladiators[name][technique] = skill;
                    //let currentTotalSkill = gladiators[name].totalSkill;
                    //gladiators[name].totalSkill = currentTotalSkill + skill;
                    gladiators[name].totalSkill += skill;
                    //console.log(gladiators);
                } else {
                    if (gladiators[name][technique] < skill) {
                        let currentSkill = gladiators[name][technique];
                        gladiators[name][technique] = skill;
                        //gladiators[name][technique] = Math.max(currentSkill, skill);
                        gladiators[name].totalSkill += skill - currentSkill;
                        //console.log(gladiators);
                    }
                }
            }
        } else {
            let [firstGladiator, secondGladiator] = line.split(" vs ");
            
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let techniquesFirstGladiator = Object.entries(gladiators[firstGladiator]).filter(x => {
                    return x[0] !== "totalSkill"
                });
                
                let techniquesSecondGladiator = Object.entries(gladiators[secondGladiator]).filter(x => x[0] !== "totalSkill");
                
                for (let tech1 of techniquesFirstGladiator) {
                    for (let tech2 of techniquesSecondGladiator) {                        
                        if (tech1[0] === tech2[0]) {                            
                            if (gladiators[firstGladiator].totalSkill > gladiators[secondGladiator].totalSkill) {
                                delete gladiators[secondGladiator];
                            } else if (gladiators[secondGladiator].totalSkill > gladiators[firstGladiator].totalSkill) {
                                delete gladiators[firstGladiator];
                            }
                            break;
                        }
                        
                    }
                }              
                                
            }            
        }        
    }
    console.log(gladiators);
    //let arrOfGladiators = Object.entries(gladiators);
    //console.log(arrOfGladiators);
    let gladiatorsValues = Object.values(gladiators).map(x => {
       //console.log(x);
    });
    //console.log(gladiatorsValues);
    
}

arenaTier3([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Gladius -> Shield -> 500',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);