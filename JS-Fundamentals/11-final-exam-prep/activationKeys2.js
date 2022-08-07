function solve(input) {
    let key = input.shift();

    while(input[0] !== 'Generate') {
        let [command, ...params] = input.shift().split('>>>');

        if(command === 'Contains') {
            let substring = params[0];
            
            if(key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if(command === 'Flip') {
            let lettersCase = params[0];
            let startIndex = Number(params[1]);
            let endIndex = Number(params[2]);

            let rightPart = key.substring(0, startIndex);
            let substring = key.substring(startIndex, endIndex);
            let leftPart = key.substring(endIndex);

            if(lettersCase === 'Upper') {
                substring =substring.toUpperCase();
            } else if (lettersCase === 'Lower') {
                substring = substring.toLowerCase();
            }

            key = rightPart + substring + leftPart;
            console.log(key);

        } else if(command === 'Slice') {
            let startIndex = Number(params[0]);
            let endIndex = Number(params[1]);

            let rigthPart = key.substring(0, startIndex);
            let leftPart = key.substring(endIndex);

            key = rigthPart + leftPart;
            console.log(key);
        }
    }

    console.log(`Your activation key is: ${key}`);
}

solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);
