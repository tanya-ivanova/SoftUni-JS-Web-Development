function gladiatorInventory (input) {
    let [inventory, ...commands] = input;
    inventory = inventory.split (" ");
    
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        command = command.split(" ");
        
        
        if (command[0] === "Buy") {
            if (inventory.indexOf(command[1]) === -1) {
                inventory.push(command[1]);
                
            }
        } else if (command[0] === "Trash") {
            if (inventory.indexOf(command[1]) !== -1) {
                inventory.splice(inventory.indexOf(command[1]), 1);
                
            }
        } else if (command[0] === "Repair") {
            if (inventory.indexOf(command[1]) !== -1) {
                let equipment = inventory.splice(inventory.indexOf(command[1]), 1);
                inventory.push(equipment[0]);              
                
            }
        } else if (command[0] === "Upgrade") {
            let [equipment, upgrade] = command[1].split("-");
            
            if (inventory.indexOf(equipment) !== -1) {
                let equipUpgrade = equipment + ":" + upgrade;
                inventory.splice(inventory.indexOf(equipment) + 1, 0, equipUpgrade);                
            }
        }
    }

    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);