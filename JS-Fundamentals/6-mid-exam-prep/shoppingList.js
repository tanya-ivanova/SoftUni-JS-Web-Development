function shoppingList (input) {
    let groceries = input.shift().split("!");
    
    while(input[0] !== "Go Shopping!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let item = tokens[1];

        if (command === "Urgent") {
            if (groceries.indexOf(item) === -1) {
                groceries.unshift(item);               
            }
        } else if (command === "Unnecessary") {
            if (groceries.indexOf(item) !== -1) {
                let indexOfItem = groceries.indexOf(item);
                groceries.splice(indexOfItem, 1);
            }
        } else if (command === "Correct") {
            let newItem = tokens[2];

            if (groceries.indexOf(item) !== -1) {
                let indexOfOldItem = groceries.indexOf(item);
                groceries[indexOfOldItem] = newItem;
            }
        } else if (command === "Rearrange") {
            if (groceries.indexOf(item) !== -1) {
                let indexOfItem = groceries.indexOf(item);
                groceries.splice(indexOfItem, 1);
                groceries.push(item);
            }
        }
    }
    console.log(groceries.join(", "));
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);