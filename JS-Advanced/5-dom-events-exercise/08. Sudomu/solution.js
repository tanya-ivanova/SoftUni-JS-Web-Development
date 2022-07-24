function solve() {
    let text = document.querySelector('#check p');
    let table = document.querySelector('table');
    
    let buttons = document.querySelectorAll('tfoot button');
    let checkButton = buttons[0];
    let clearButton = buttons[1];

    checkButton.addEventListener('click', check);
    clearButton.addEventListener('click', clear);

    function check () {
        let rows = Array.from(document.querySelectorAll('tbody tr'));
    
        let firstRow = Array.from(rows[0].children);
        let sumFirstRow = 0;

        for (let child of firstRow) {
            sumFirstRow += Number(child.children[0].value);            
        }
        
        let sumsAreEqual = true;
        let numbersAreDifferentInRow = true;
        let numbersAreDifferentInColumn = true;

        for (let i = 0; i < rows.length; i++) {
            let sum = 0;

            let row = Array.from(rows[i].children);
            for (let r = 0; r < row.length; r++) {
                if (r < row.length - 1) {
                    if (row[r].children[0].value === row[r + 1].children[0].value) {
                        numbersAreDifferentInRow = false;
                        break;
                    }
                }
                sum += Number(row[r].children[0].value);            
            }

            if (!numbersAreDifferentInRow) {
                break;
            }
            
            if(sum !== sumFirstRow) {
                sumsAreEqual = false;                
                break;
            }
        }        

        for (let j = 0; j < rows.length; j++) {
            let sum = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = Array.from(rows[i].children);
                if (j < rows.length - 1) {
                    if (row[j].children[0].value === row[j + 1].children[0].value) {
                        numbersAreDifferentInColumn = false;
                        break;
                    }
                }
                sum += Number(row[j].children[0].value);
            }
            if (!numbersAreDifferentInColumn) {
                break;
            }
            if(sum !== sumFirstRow) {
                sumsAreEqual = false;                
                break;
            }
        }

        if(sumsAreEqual && numbersAreDifferentInRow && numbersAreDifferentInColumn) {
            text.textContent = 'You solve it! Congratulations!';
            text.style.color = 'green';            
            table.style.border = '2px solid green';
        } else {
            text.textContent = 'NOP! You are not done yet...';
            text.style.color = 'red';            
            table.style.border = '2px solid red';
        }
    }

    function clear () {
        text.textContent = '';
        table.style.border = 'none';

        let inputs = Array.from(document.querySelectorAll('tbody input'))
        .forEach(input => input.value = '');
    }
    
}