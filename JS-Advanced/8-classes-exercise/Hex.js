class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let arr = [];
        let decimalValue = this.value;

        while(decimalValue > 0) {
            let remainder = decimalValue % 16;
            decimalValue = Math.floor(decimalValue / 16);
            
            if(remainder === 10) {
                remainder = 'A';
            } else if(remainder === 11) {
                remainder = 'B';
            } else if(remainder === 12) {
                remainder = 'C';
            } else if(remainder === 13) {
                remainder = 'D';
            } else if(remainder === 14) {
                remainder = 'E';
            } else if(remainder === 15) {
                remainder = 'F';
            }

            arr.push(remainder);
        }

        let hexadecimal = arr.reverse().join('');
        hexadecimal = '0x' + hexadecimal;
        
        return hexadecimal;        
    }

    plus(num) {
        if(num instanceof Hex) {
            return new Hex(this.value + num.valueOf());
        } else {
            return new Hex(this.value + num);
        }
    }

    minus(num) {
        if(num instanceof Hex) {
            return new Hex(this.value - num.valueOf());
        } else {
            return new Hex(this.value - num);
        }
    }

    parse(str) {
        let decimal = 0;
        
        let arr = str.split('');
        let j = arr.length - 1;
        
        if(arr.includes('A')) {
            while(arr.indexOf('A') !== -1) {
                arr.splice(arr.indexOf('A'), 1, 10);
            }
        }

        if(arr.includes('B')) {
            while(arr.indexOf('B') !== -1) {
                arr.splice(arr.indexOf('B'), 1, 11);
            }
        }

        if(arr.includes('C')) {
            while(arr.indexOf('C') !== -1) {
                arr.splice(arr.indexOf('c'), 1, 12);
            }
        }

        if(arr.includes('D')) {
            while(arr.indexOf('D') !== -1) {
                arr.splice(arr.indexOf('D'), 1, 13);
            }
        }

        if(arr.includes('E')) {
            while(arr.indexOf('E') !== -1) {
                arr.splice(arr.indexOf('E'), 1, 14);
            }
        }

        if(arr.includes('F')) {
            while(arr.indexOf('F') !== -1) {
                arr.splice(arr.indexOf('F'), 1, 15);
            }
        }

        for(let i = 0; i < arr.length; i++) {
            decimal += arr[i] * (16 ** j);
            j--;
        }

        return decimal;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));