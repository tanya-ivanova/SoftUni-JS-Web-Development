function imitationGame2 (input) {
    let message = input.shift();    

    while (input[0] !== "Decode") {
        let [command, p1, p2] = input.shift().split("|");        

        if (command === "Move") {
            p1 = Number(p1);
            if (p1 <= message.length) {
                let end = message.substring(0, p1);
                let start = message.substring(p1);
                message = start + end;
            }
        } else if (command == "Insert") {
            p1 = Number(p1);
            if ((p1 >= 0) && (p1 <= message.length)) {
                let left = message.substring(0, p1);
                let right = message.substring(p1);
                message = left + p2 + right;
            }
            
        } else if (command === "ChangeAll") {
            if (message.includes(p1)) {
                message = message.split(p1).join(p2);
            }
        }
    }

    console.log(`The decrypted message is: ${message}`);    
}

imitationGame2([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);