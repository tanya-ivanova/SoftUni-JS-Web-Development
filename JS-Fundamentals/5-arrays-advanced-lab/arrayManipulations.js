function arrayManipulations (input) {
    let arr = input.shift().split(" ").map(Number);
    
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");        
        let manipulation = command[0];

        if (manipulation === "Add") {
            let number = Number(command[1]);
            arr.push(number);            
        } else if (manipulation === "Remove") {
            let number = Number(command[1]);

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === number) {
                    arr.splice(i, 1);                    
                }
            }
        } else if (manipulation === "RemoveAt") {
            let index = Number(command[1]);
            arr.splice(index, 1);            
        } else if (manipulation === "Insert") {
            let number = Number(command[1]);
            let index = Number(command[2]);
            arr.splice(index, 0, number);            
        }
    }
    console.log(arr.join(" "));
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);