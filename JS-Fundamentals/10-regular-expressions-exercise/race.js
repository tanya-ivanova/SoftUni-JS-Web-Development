function race (input) {
    let participants = input.shift().split(", ");
    let racers = {};
    let patternAlphaNumeric = /\w/g;

    for (let participant of participants) {
        racers[participant] = 0;
    }

    while (input[0] !== "end of race") {
        let line = input.shift();
        let alphanumeric = patternAlphaNumeric.exec(line);
        let alphaNumArr = [];
        
        while(alphanumeric !== null) {
            alphaNumArr.push(alphanumeric[0]);            
            alphanumeric = patternAlphaNumeric.exec(line);
        }        
        
        let name = "";
        let distance = 0;

        for (let element of alphaNumArr) {            
            let code = element.charCodeAt(0);            
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                name += element
            } else if (code >= 48 && code <= 57) {
                element = Number(element);
                distance += element;
            }
        }        
        if (racers.hasOwnProperty(name)) {
            let currentDistance = racers[name];
            racers[name] = currentDistance + distance;
        }                
    }
    let sorted = Object.entries(racers);
    sorted.sort((a, b) => b[1] - a[1]);
    
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])