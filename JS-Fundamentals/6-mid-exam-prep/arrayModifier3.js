function solve(input) {
    let arr = input.shift().split(' ').map(Number);
    let actions = {
        swap,
        multiply,
        decrease
    }
    
    while (input[0] !== 'end') {
        let [command, ...params] = input.shift().split(' ');        
        let action = actions[command];
        action(params);             
        
    }
    console.log(arr.join(', '));

    function swap(params) {
        let index1 = params[0];
            let index2 = params[1];
            let element1 = arr[index1];
            let element2 = arr[index2];
            arr.splice(index1, 1, element2);
            arr.splice(index2, 1, element1);
    }

    function multiply(params) {
        let index1 = params[0];
            let index2 = params[1];
            let element = arr[index1] * arr[index2];
            arr.splice(index1, 1, element);
    }
    
    function decrease() {
        arr = arr.map(x => x - 1);
    }
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