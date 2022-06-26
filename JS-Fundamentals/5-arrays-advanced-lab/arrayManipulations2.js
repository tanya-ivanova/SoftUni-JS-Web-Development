function arrayManipulations2 (input) {
    let arr = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        
        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum, secondNum);
                break;
        }       
    }
    console.log(arr.join(" "));

    function add(num) {
        arr.push(num);        
    }

    function remove(num) {
        arr = arr.filter(x => x !== num);     
    }

    function removeAt(num) {
        arr.splice(num, 1);        
    }

    function insert(firstNum, secondNum) {
        arr.splice(secondNum, 0, firstNum);        
    }
}

arrayManipulations2(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);