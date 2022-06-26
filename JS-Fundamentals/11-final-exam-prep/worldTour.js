function worldTour (input) {
    let text = input.shift();
        
    while(input[0] !== "Travel") {
        let [command, p1, p2] = input.shift().split(":"); 
        command = command.split(" ").join("");

        if (command === "AddStop") {
            let index = Number(p1);

            if (index >= 0 && index < text.length) {
                let leftPart = text.substring(0, index);
                let rigthPart = text.substring(index);
                text = leftPart + p2 + rigthPart;               
                
            }
            console.log(text);
            
        } else if (command === "RemoveStop") {
            let startIndex = Number(p1);
            let endIndex = Number(p2);

            if((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length)) {
                let leftPart = text.substring(0, startIndex);
                let rightPart = text.substring(endIndex + 1);
                text = leftPart + rightPart;                                
            }
            console.log(text);

        } else if (command === "Switch") {
            if (text.includes(p1)) {
                text = text.split(p1).join(p2);                
            }
            console.log(text);
        }             
    }
    console.log(`Ready for world tour! Planned stops: ${text}`); 
}

worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel',
    ''
  ]);