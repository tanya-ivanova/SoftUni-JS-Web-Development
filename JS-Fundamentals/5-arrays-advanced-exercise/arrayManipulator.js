function arrayManipulator (arr, commands) {
    let i = 0;
    
    while (commands[i] !== "print") {
        let [command, ...numbers] = commands[i].split(" ");
        i++;
        numbers = numbers.map(Number);        
        
        if(command === "add") {
            let [index, element] = numbers;                        
            add(index, element);
        } else if (command === "addMany") {
            let [index, ...elements] = numbers;          
            addMany(index, elements);
        } else if (command === "contains") {
            let [element] = numbers;
            console.log(contains(element));
        } else if (command === "remove") {
            let [index] = numbers;
            remove(index);
        } else if (command === "shift") {
            let [positions] = numbers;
            shift(positions);
        } else if (command == "sumPairs") {
            arr = sumPairs();
        }
    }

    console.log(`[ ${arr.join(", ")} ]`);

    function add(index, element) {
        arr.splice(index, 0, element);
    }

    function addMany(index, elements) {
        for (let j = 0; j < elements.length; j++) {
            arr.splice(index + j, 0, elements[j]);
        }
    }

    function contains(element) {
        let result = arr.indexOf(element);
        return result;
    }

    function remove(index) {
        arr.splice(index, 1);
    }

    function shift(positions) {
        for (let i = 0; i < positions; i++) {
            arr.push(arr.shift());
        }
    }

    function sumPairs() {
        let newArr =[];
        for (let i = 0; i < arr.length; i += 2) {
            if (i === arr.length - 1) {
                newArr.push(arr[i]);
            } else {
                newArr.push(arr[i] + arr[i + 1]);
            }
        }
        //arr.splice(0, arr.length - 1, newArr);
        //arr = newArr;
        return newArr;
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],
    ['sumPairs', 'print']);
