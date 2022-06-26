function arrayModifier (input) {
    let [arr, ...commands] = input;
    arr = arr.split(" ");
    arr = arr.map(Number);    

    let ind = 0;

    while(commands[ind] !== "end") {
        let tokens = commands[ind].split(" ");
        ind++;
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        if (command === "swap") {
            let el1 = arr[index1];
            let el2 = arr[index2];
            arr.splice(index1, 1, el2);
            arr.splice(index2, 1, el1);
            //console.log(arr);
        } else if (command === "multiply") {
            let result = arr[index1] * arr[index2];
            arr.splice(index1, 1, result);
            //console.log(arr);
        } else if (command === "decrease") {
            arr = arr.map(x => x - 1);
            //console.log(arr);
        }
    }
    console.log(arr.join(", "));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
  arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);