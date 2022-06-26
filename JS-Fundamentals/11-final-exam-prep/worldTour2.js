function worldTour2 (input) {
    let text = input.shift();
    let actions = {
        "Add Stop": add,
        "Remove Stop": remove,
        "Switch": swap
    }
        
    while(input[0] !== "Travel") {
        let [command, p1, p2] = input.shift().split(":");
        let action = actions[command];
        action(p1, p2); 
        console.log(text);                  
    }

    console.log(`Ready for world tour! Planned stops: ${text}`); 

    function validateIndex (index) {
        return (index >= 0 && index < text.length);
    }

    function add(p1, p2) {
        let index = Number(p1);

        if (validateIndex(index)) {
            let leftPart = text.substring(0, index);
            let rigthPart = text.substring(index);
            text = leftPart + p2 + rigthPart;            
        }            
    }

    function remove (p1, p2) {
        let startIndex = Number(p1);
        let endIndex = Number(p2);

        if(validateIndex(startIndex) && validateIndex(endIndex)) {
            let leftPart = text.substring(0, startIndex);
            let rightPart = text.substring(endIndex + 1);
            text = leftPart + rightPart;                                
        }            
    }

    function swap (p1, p2) {
        let oldstring = new RegExp(p1, "g");
        text = text.replace(oldstring, p2);
        /*if (text.includes(p1)) {
            text = text.split(p1).join(p2);                
        } */       
    }
}

worldTour2([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel',
    ''
  ]);