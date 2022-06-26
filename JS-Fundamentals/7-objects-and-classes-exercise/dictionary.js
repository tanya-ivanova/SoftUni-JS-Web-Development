function dictionery (input) {
    let arrOfOj = [];
    while (input.length !== 0) {
        let text = input.shift();
        let obj = JSON.parse(text);   
        
        //arrOfOj.push(obj);
        let term = Object.keys(obj);
        let isTermPresent = false;
        for (let el of arrOfOj) {
            for (let key of Object.keys(el)) {
                if (key === term[0]) {
                    el[key] = obj[term];
                    isTermPresent = true;
                }
            }
        }
        if(!isTermPresent) {
            arrOfOj.push(obj);
        } 
    }
    arrOfOj.sort((previousObj, currentObj) => {
        let a;
        let b;
        for(let key of Object.keys(previousObj)) {
            a = key;
        }
        for (let key of Object.keys(currentObj)) {
            b = key;
        }
        return a.localeCompare(b);
    });

    for (let el of arrOfOj) {
        for (let key of Object.keys(el)) {
            console.log(`Term: ${key} => Definition: ${el[key]}`);
        }
    }
}

dictionery([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A hot drink."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

    ]);