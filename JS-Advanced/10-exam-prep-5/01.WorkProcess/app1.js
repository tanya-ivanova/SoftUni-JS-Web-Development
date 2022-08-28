function solve() {
    let inputs = Array.from(document.querySelectorAll('#signup input'));
    
    let buttonHireWorker = document.getElementById('add-worker');

    let tbodyElement = document.getElementById('tbody');

    let budgetElement = document.getElementById('sum');

    buttonHireWorker.addEventListener('click', onHireWorker);

    function onHireWorker(event) {
        event.preventDefault();

        let isEmptyString = false;
        for(let input of inputs) {            
            if(input.value === '') {
                isEmptyString = true;
                break;
            }            
        }

        if(isEmptyString) {
            return;
        }

        let trElement = document.createElement('tr');

        for(let input of inputs) {
            let tdElement = document.createElement('td');
            tdElement.textContent = input.value;

            trElement.appendChild(tdElement);
        }

        let salary = Number(trElement.lastElementChild.textContent);
        

        let tdWithButtons = document.createElement('td');

        let buttonFired = document.createElement('button');
        buttonFired.textContent = 'Fired';
        buttonFired.classList.add('fired');
        tdWithButtons.appendChild(buttonFired);

        let buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';
        buttonEdit.classList.add('edit');
        tdWithButtons.appendChild(buttonEdit);

        trElement.appendChild(tdWithButtons);

        tbodyElement.appendChild(trElement);

        for(let input of inputs) {
            input.value = '';
        }

        let totalbudget = Number(budgetElement.textContent);
        totalbudget += salary;
        budgetElement.textContent = totalbudget.toFixed(2);

        buttonEdit.addEventListener('click', onEdit);
        buttonFired.addEventListener('click', onFired);

        function onEdit(event) {
            let tdElements = Array.from(trElement.querySelectorAll('td'));

            for(let i = 0; i < inputs.length; i++) {
                inputs[i].value = tdElements[i].textContent;
            }

            trElement.remove();

            totalbudget -= salary;
            budgetElement.textContent = totalbudget.toFixed(2);
        }

        function onFired(event) {
            totalbudget -= salary;
            budgetElement.textContent = totalbudget.toFixed(2);

            trElement.remove();
        }
    }
}

solve();
