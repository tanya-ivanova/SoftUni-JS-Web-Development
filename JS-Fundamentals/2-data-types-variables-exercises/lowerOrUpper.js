function lowerOrUpper (character) {
    let lowerChar = character.toLowerCase();
    
    if (character === lowerChar) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }
}

lowerOrUpper("L");
lowerOrUpper("f");