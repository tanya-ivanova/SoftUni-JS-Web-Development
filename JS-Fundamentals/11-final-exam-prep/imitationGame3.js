function solve(input) { 
    let message = input.shift();
    
    while(input[0] !== 'Decode') {
        let tokkens = input.shift().split('|');
        let command = tokkens[0];

        if (command === 'Move') {
            let numberOfLetters = Number(tokkens[1]);
            let partToBeMoved = message.substring(0, numberOfLetters);
            let remainingPart = message.substring(numberOfLetters);
            message = remainingPart + partToBeMoved;
        } else if (command === 'Insert') {
            let index = Number(tokkens[1]);
            let value = tokkens[2];
            let leftPart = message.substring(0, index);
            let rigthPart = message.substring(index);
            message = leftPart + value + rigthPart;
        } else if (command === 'ChangeAll') {
            let substring = tokkens[1];
            let replacement = tokkens[2];
            message = message.split(substring).join(replacement);
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]);