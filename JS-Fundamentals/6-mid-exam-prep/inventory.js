function solve (input) {
    let inventory = input.shift().split (", ");
    
    while(input[0] !== "Craft!") {
        let tokens = input.shift().split(" - ");
        let [command, item] = tokens;
        
        if (command === "Collect") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === "Drop") {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
            }
        } else if (command === "Combine Items") {
            let [oldItem, newItem] = item.split(":");
            
            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1, 0, newItem);
            }
        } else if (command === "Renew") {
            if (inventory.includes(item)) {
                let itemToBeRenewed = inventory.splice(inventory.indexOf(item), 1);
                inventory.push(...itemToBeRenewed);
            }
        }
    }
    console.log(inventory.join(", "));
}

solve([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);
  console.log("---");
  solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);
