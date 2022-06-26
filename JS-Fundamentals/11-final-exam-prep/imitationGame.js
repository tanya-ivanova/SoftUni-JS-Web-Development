function imitationGame (input) {
    let message = input.shift();
    let actions = {
        "Move": move,
        "Insert": insert,
        "ChangeAll": changeAll
    }

    while (input[0] !== "Decode") {
        let [command, p1, p2] = input.shift().split("|");
        let action = actions[command];
        action(p1, p2);
        //console.log(message);
    }

    console.log(`The decrypted message is: ${message}`);

    function move (numberOfLetters) {
        numberOfLetters = Number(numberOfLetters);
        let end = message.substring(0, numberOfLetters);
        let start = message.substring(numberOfLetters);
        message = start + end;
    }

    function insert (index, value) {
        index = Number(index);
        let left = message.substring(0, index);
        let right = message.substring(index);
        message = left + value + right;
    }

    function changeAll (substr, replacement) {
        let match = new RegExp(substr, "g");
        message = message.replace(match, replacement);
    }
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);