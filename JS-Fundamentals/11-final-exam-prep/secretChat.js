function secretChat (input) {
 let message = input.shift();
 
 while (input[0] !== "Reveal") {
     let tokens = input.shift().split(":|:");
     let command = tokens[0];

     if (command === "InsertSpace") {
         let index = tokens[1];
         let firstStrPart = message.substring(0, index);
         let secondPart = message.substring(index);
         message = firstStrPart + " " + secondPart;
         console.log(message);         
     } else if (command === "Reverse") {
        let strPart = tokens[1];

        if (message.includes(strPart)) {
            let index = message.indexOf(strPart);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index  + strPart.length);

            let strPartAsArray = strPart.split("").reverse();
            strPart = strPartAsArray.join("");
            message = firstPart + secondPart + strPart;
            console.log(message);
        } else {
            console.log("error");
        }
     } else if (command === "ChangeAll") {
         let substrToBeReplaced = tokens[1];
         let replacement = tokens[2];

         while (message.includes(substrToBeReplaced)) {
             message = message.replace(substrToBeReplaced, replacement);             
         }
         console.log(message);
     }
 }
 console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);