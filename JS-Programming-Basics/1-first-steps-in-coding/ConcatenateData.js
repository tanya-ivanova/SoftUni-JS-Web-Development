function concatenateData(input) {
    let name = input[0];
    let familyName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${name} ${familyName}, a ${age}-years old person from ${town}.`);
}

concatenateData(["Maria", "Ivanova", "20", "Sofia"]);