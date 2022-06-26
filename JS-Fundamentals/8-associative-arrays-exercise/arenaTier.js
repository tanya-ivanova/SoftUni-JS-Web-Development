function arenaTier (input) {
    let gladiators = {};
    let totalSkills = {};

    while(input[0] !== "Ave Cesar") {
        let line = input.shift();

        if (line.includes("->")) {
            let [name, technique, skill] = line.split(" -> ");
            skill = Number(skill);
            
            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {                    
                    [technique]: skill
                }
                totalSkills[name] = skill;
            } else {
                if(!gladiators[name].hasOwnProperty(technique)) {
                    gladiators[name][technique] = skill;
                    let currentTotal = totalSkills[name];
                    totalSkills[name] = currentTotal + skill;
                } else {
                    if (gladiators[name][technique] < skill) {
                        let currentSkill = gladiators[name][technique];
                        gladiators[name][technique] = skill;
                        let currentTotal = totalSkills[name];
                        totalSkills[name] = currentTotal + (skill - currentSkill);
                    }
                }
            }
        } else {
            let [firstGladiator, secondGladiator] = line.split(" vs ");
            
            if(gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let battleWin = false;

                for (let techniquesFirst of Object.entries(gladiators[firstGladiator])) {
                    for (let techniquesSecond of Object.entries(gladiators[secondGladiator])) {
                        if (techniquesFirst[0] === techniquesSecond[0]) {
                            if (totalSkills[firstGladiator] > totalSkills[secondGladiator]) {
                                delete gladiators[secondGladiator];
                                delete totalSkills[secondGladiator];
                                battleWin = true;
                                break;
                            } else if (totalSkills[secondGladiator] > totalSkills[firstGladiator]) {
                                delete gladiators[firstGladiator];
                                delete totalSkills[firstGladiator];
                                battleWin = true;
                                break;
                            }
                        }
                    }
                    if (battleWin) {
                        break;
                    }
                }
            }
        }
    }
    let sortedByTotalSkills = Object.entries(totalSkills);
    sortedByTotalSkills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    for (let gladiator of sortedByTotalSkills) {
        console.log(`${gladiator[0]}: ${gladiator[1]} skill`);

        let sortedByTechniques = Object.entries(gladiators[gladiator[0]]);
        sortedByTechniques.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        
        for (let i = 0; i < sortedByTechniques.length; i++) {
            console.log(`- ${sortedByTechniques[i][0]} <!> ${sortedByTechniques[i][1]}`);
        }
    }    
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);