function solve() {
    const firstNameElement = document.getElementById('fname');
    const lastNameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');
    const hireBtn = document.getElementById('add-worker');
    const tbodyElement = document.getElementById('tbody');
    const sumElement = document.getElementById('sum');
    let sum = 0;

    hireBtn.addEventListener('click', onHire);

    function onHire(event) {
        event.preventDefault();

        if(firstNameElement.value === '' || lastNameElement.value === '' || emailElement.value === ''
        || birthElement.value === '' || positionElement.value === '' || salaryElement.value === '') {
            return;
        }

        const trElement = document.createElement('tr');
        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstNameElement.value;
        const tdLastName = document.createElement('td');
        tdLastName.textContent = lastNameElement.value;
        const tdEmail = document.createElement('td');
        tdEmail.textContent = emailElement.value;
        const tdBirth = document.createElement('td');
        tdBirth.textContent = birthElement.value;
        const tdPosition = document.createElement('td');
        tdPosition.textContent = positionElement.value;
        const tdSalary = document.createElement('td');
        tdSalary.textContent = salaryElement.value;
        const tdButtons = document.createElement('td');
        const firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);
        trElement.appendChild(tdFirstName);
        trElement.appendChild(tdLastName);
        trElement.appendChild(tdEmail);
        trElement.appendChild(tdBirth);
        trElement.appendChild(tdPosition);
        trElement.appendChild(tdSalary);
        trElement.appendChild(tdButtons);
        tbodyElement.appendChild(trElement);

        sum += Number(salaryElement.value);

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        sumElement.textContent = sum.toFixed(2);

        editBtn.addEventListener('click', onEdit);
        firedBtn.addEventListener('click', onFired);

        function onEdit(event) {
            trElement.remove();

            firstNameElement.value = tdFirstName.textContent;
            lastNameElement.value = tdLastName.textContent;
            emailElement.value = tdEmail.textContent;
            birthElement.value = tdBirth.textContent;
            positionElement.value = tdPosition.textContent;
            salaryElement.value = tdSalary.textContent;

            sum -= Number(salaryElement.value);
            sumElement.textContent = sum.toFixed(2);
        }

        function onFired(event) {
            trElement.remove();

            sum -= Number(tdSalary.textContent);
            sumElement.textContent = sum.toFixed(2);
        }
    }
}

solve();