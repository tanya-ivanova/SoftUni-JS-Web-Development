function solve (input) {
    let operations = {
        '+': (a, b) => {
            return a + b;
        },
        '-': (a, b) => {
            return a - b;
        },
        '*': (a, b) => {
            return a * b;
        },
        '/': (a, b) => {
            return a / b;
        }
    }

    let numbers = [];

    let notEnough = false;

    for (let element of input) {
        if (typeof element === 'number') {
            numbers.push(element);
        } else {
            if (numbers.length > 1) {
                let result = operations[element](numbers[numbers.length - 2], numbers[numbers.length - 1]);
                numbers.splice(-2);
                numbers.push(result);
            } else {
                console.log('Error: not enough operands!');
                notEnough = true;
            }
        }
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else {
        if (!notEnough) {
            console.log(numbers[0]);
        }
    }
}

solve([15,
    '/'])