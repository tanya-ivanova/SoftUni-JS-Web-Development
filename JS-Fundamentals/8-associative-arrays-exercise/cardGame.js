function cardGame(input) {
    let cardsInitial = {};  
    
    for(let line of input) {
        let tokens = line.split(": ");
        let name = tokens.shift();
        let elements = tokens[0].split(", ");     
        
        if(!cardsInitial.hasOwnProperty(name)) {
            cardsInitial[name] = [];
                   
        } 
            
            for(let i = 0; i < elements.length; i++) {
                let isUnique = true;
                for (let j = 0; j < cardsInitial[name].length; j++) {
                    if (elements[i] === cardsInitial[name][j]) {
                        isUnique = false;
                    }
                }
                if(isUnique) {
                    cardsInitial[name].push(elements[i]);
                }
            }
                    
    } 
    
    for (let key in cardsInitial) {
        let sum = 0;
        for (let card of cardsInitial[key]) {
            let power = "";
            let type = "";
            if(card.length === 2) {
                power = card[0];
                type = card[1];
            } else {
                power = card[0] + card[1];
                type = card[2];
            }
            
            if (power === "J") {
                power = 11;
            } else if (power === "Q") {
                power = 12;
            } else if (power === "K") {
                power = 13;
            } else if (power === "A") {
                power = 14;
            } else {
                power = Number(power);
            }

            if (type === "S") {
                type = 4;
            } else if (type === "H") {
                type = 3;
            } else if (type === "D") {
                type = 2;
            } else if (type === "C") {
                type = 1;
            }

            sum = sum + (power * type);
        }
        console.log(`${key}: ${sum}`);
    }
    
    
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);