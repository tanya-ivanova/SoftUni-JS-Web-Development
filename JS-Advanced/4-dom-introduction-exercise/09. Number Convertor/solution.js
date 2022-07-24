function solve() {
    let optionBinary = document.querySelector('#selectMenuTo option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    
    let optionHexadecimal = document.createElement('option');
    document.getElementById('selectMenuTo').appendChild(optionHexadecimal);
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';

    let inputNumber = document.getElementById('input');
    let result = document.getElementById('result');

    let buttonConvert = document.querySelector('button');
    buttonConvert.addEventListener('click', onConvert);

    function onConvert (event) {
        let options = Array.from(document.getElementById('selectMenuTo').children);
        let number = Number(inputNumber.value);

        if(options[0].selected === true) {            
            let remainder = '';
            
            while (number > 0) {
                remainder += number % 2;
                number = Math.floor(number / 2);        
            }
        
            let binary = remainder.split('').reverse().join('');
            result.value = binary;
        } else if (options[1].selected === true) {
            let remainders = [];
            
            while (number > 0) {
            remainders.push(number % 16);
            number = Math.floor(number / 16);        
            }  
    
            for (let i = 0; i < remainders.length; i++) {
                let remainder = remainders[i];

                if (remainder === 10) {
                    remainder = 'A';            
                }
                if (remainder === 11) {
                    remainder = 'B';            
                }
                if (remainder === 12) {
                    remainder = 'C';
                } 
                if (remainder === 13) {
                    remainder = 'D';
                }
                if (remainder === 14) {
                    remainder = 'E';
                }
                if (remainder === 15) {
                    remainder = 'F';
                }

                remainders.splice(i, 1, remainder);
            }
            let hexadecimal = remainders.reverse().join('');

            result.value = hexadecimal;
        }
    }
}