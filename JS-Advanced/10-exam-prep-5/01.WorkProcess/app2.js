function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    
    let buttonHireWorker = document.getElementById('add-worker');

    let tbodyElement = document.getElementById('tbody');

    let budgetElement = document.getElementById('sum');

    buttonHireWorker.addEventListener('click', onHireWorker);

    function onHireWorker(event) {
        event.preventDefault();

        if(firstNameElement.value === '' || lastNameElement.value === '' || emailElement.value === '' || birthElement.value === '' || positionElement.value === '' || salaryElement.value === '') {
            return;
        }

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        let trElement = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstName;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = lastName;

        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;

        let tdBirth = document.createElement('td');
        tdBirth.textContent = birth;

        let tdPosition = document.createElement('td');
        tdPosition.textContent = position;

        let tdSalary = document.createElement('td');
        tdSalary.textContent = salary;

        let tdWithButtons = document.createElement('td');

        let buttonFired = document.createElement('button');
        buttonFired.textContent = 'Fired';
        buttonFired.classList.add('fired');
        tdWithButtons.appendChild(buttonFired);

        let buttonEdit = document.createElement('button');
        buttonEdit.textContent = 'Edit';
        buttonEdit.classList.add('edit');
        tdWithButtons.appendChild(buttonEdit);

        trElement.appendChild(tdFirstName);
        trElement.appendChild(tdLastName);
        trElement.appendChild(tdEmail);
        trElement.appendChild(tdBirth);
        trElement.appendChild(tdPosition);
        trElement.appendChild(tdSalary);
        trElement.appendChild(tdWithButtons);

        tbodyElement.appendChild(trElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        let totalbudget = Number(budgetElement.textContent);
        totalbudget += Number(salary);
        budgetElement.textContent = totalbudget.toFixed(2);

        buttonEdit.addEventListener('click', onEdit);
        buttonFired.addEventListener('click', onFired);

        function onEdit(event) {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            emailElement.value = email;
            birthElement.value = birth;
            positionElement.value = position;
            salaryElement.value = salary;

            totalbudget = Number(budgetElement.textContent);
            totalbudget -= Number(salary);
            budgetElement.textContent = totalbudget.toFixed(2);

            trElement.remove();
        }

        function onFired(event) {
            totalbudget = Number(budgetElement.textContent);
            totalbudget -= Number(salary);
            budgetElement.textContent = totalbudget.toFixed(2);

            trElement.remove();
        }
    }
}

solve();