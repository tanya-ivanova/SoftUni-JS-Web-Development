function train(input) {
    let [wagons, maxCapacity, ...commands] = input;
    wagons = wagons.split(" ").map(Number);    
    maxCapacity = Number(maxCapacity);

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");        
        
        if (command[0] === "Add") {
            let newWagon = Number(command[1]);
            addWagon(newWagon);
        } else {
            let passengers = Number(command[0]);
            addPassengers(passengers);
        }
    }
    console.log(wagons.join(" "));

    function addWagon(num) {
        wagons.push(num);
    }

    function addPassengers(num) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + num <= maxCapacity) {
                wagons[i] = wagons[i] + num;
                break;
            }
        }
    }
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);