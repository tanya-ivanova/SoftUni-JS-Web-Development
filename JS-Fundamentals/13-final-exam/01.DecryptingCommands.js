function decryptingCommands(input) {
    let message = input.shift();

    while(input[0] !== 'Finish') {
        let [decryptCommand, ...params] = input.shift().split(' ');

        if(decryptCommand === 'Replace') {
            let currentChar = params[0];
            let newChar = params[1];

            message = message.split(currentChar).join(newChar);
            console.log(message);
        } else if(decryptCommand === 'Cut') {
            let startIndex = Number(params[0]);
            let endIndex = Number(params[1]);

            if(startIndex < 0 || startIndex >= message.length || endIndex < 0 || endIndex >= message.length) {
                console.log('Invalid indices!');
            } else  {
                let rightPart = message.substring(0, startIndex);
                let leftPart = message.substring(endIndex + 1);

                message = rightPart + leftPart;
                console.log(message);
            }
        } else if(decryptCommand === 'Make') {
            let lettersCase = params[0];

            if(lettersCase === 'Upper') {
                message = message.toUpperCase();
                console.log(message);
            } else if(lettersCase = 'Lower') {
                message = message.toLowerCase();
                console.log(message);
            }
        } else if(decryptCommand === 'Check') {
            let str = params[0];

            if(message.includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }
        } else if(decryptCommand === 'Sum') {
            let startIndex = Number(params[0]);
            let endIndex = Number(params[1]);

            if(startIndex < 0 || startIndex >= message.length || endIndex < 0 || endIndex >= message.length) {
                console.log('Invalid indices!');
            } else  {
                let substr = message.substring(startIndex, endIndex + 1);
                let sumAscii = 0;

                for(let char of substr) {
                    sumAscii += char.charCodeAt(0);
                }

                console.log(sumAscii);
            }
        }
    }
}

decryptingCommands(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"]);
