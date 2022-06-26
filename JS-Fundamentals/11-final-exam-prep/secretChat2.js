function secretChat2 (input) {
    let message = input.shift();

    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll 
    }
    
    while (input[0] !== "Reveal") {
        let tokens = input.shift().split(":|:");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
   
        message = commands[command] (message, p1, p2);
    }
    console.log(`You have a new text message: ${message}`);

    function InsertSpace(message, p1) {
        let index = Number(p1);
        let firstStrPart = message.substring(0, index);
        let secondPart = message.substring(index);
        message = firstStrPart + " " + secondPart;
        console.log(message);
        return message;
    }

    function Reverse (message, p1) {        
   
        if (message.includes(p1)) {
            let index = message.indexOf(p1);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index  + p1.length);
   
            let strPartAsArray = p1.split("").reverse();
            p1 = strPartAsArray.join("");
            message = firstPart + secondPart + p1;
            console.log(message);
        } else {
            console.log("error");
        }
        return message;
    }

    function ChangeAll (message, p1, p2) {          
        while (message.includes(p1)) {
            message = message.replace(p1, p2);             
        }
        console.log(message);
        return(message);
    }
}
   
   secretChat2([
       'heVVodar!gniV',
       'ChangeAll:|:V:|:l',
       'Reverse:|:!gnil',
       'InsertSpace:|:5',
       'Reveal'
     ]);