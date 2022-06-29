function solve(input) {
    let result = [];
    let number = 0;

    for (let command of input) {
        number++;

        if (command === 'add') {            
            result.push(number);
        } else if (command === 'remove') {
            result.pop();
        }
    }
    
    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }
}

solve(['remove', 
'remove', 
'remove']);