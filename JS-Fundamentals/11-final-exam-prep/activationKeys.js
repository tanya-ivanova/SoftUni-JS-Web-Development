function solve(input) {
    let activationKey = input.shift();

    while(input[0] !== "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];

        if (command === "Contains") {
            let substring = tokens[1];

            if(activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === "Flip") {
            let secondCommand = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let substring = activationKey.substring(startIndex, endIndex);

            if (secondCommand === "Upper") {
                substring = substring.toUpperCase();
            } else if (secondCommand === "Lower") {
                substring = substring.toLowerCase();
            }
            
            let left = activationKey.substring(0, startIndex);
            let right = activationKey.substring(endIndex);
            activationKey = left + substring + right;
            console.log(activationKey);
        } else if (command === "Slice") {
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            let left = activationKey.substring(0, startIndex);
            let right = activationKey.substring(endIndex);
            activationKey = left + right;
            console.log(activationKey);
        }
    }

    console.log(`Your activation key is: ${activationKey}`);
}

solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);