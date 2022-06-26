function solve(input) {
    let arr = input.shift().split(' ').map(Number);
    
    while (input[0] !== 'end') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        
        if (command === 'swap') {
            let index1 = tokens[1];
            let index2 = tokens[2];
            let element1 = arr[index1];
            let element2 = arr[index2];
            arr.splice(index1, 1, element2);
            arr.splice(index2, 1, element1);
            //console.log(arr);
        } else if (command === 'multiply') {
            let index1 = tokens[1];
            let index2 = tokens[2];
            let element = arr[index1] * arr[index2];
            arr.splice(index1, 1, element);
        } else if (command === 'decrease') {
            arr = arr.map(x => x - 1);
        }
    }
    console.log(arr.join(', '));
}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);