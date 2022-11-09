const tbody = document.getElementById('results').querySelector('tbody');
const formElement = document.getElementById('form');

window.addEventListener('load', onLoad);

formElement.addEventListener('submit', onSubmit);

async function onLoad(event) {
    tbody.innerHTML = '';

    try {      
        const responseGet = await fetch('http://localhost:3030/jsonstore/collections/students');
        if(responseGet.ok === false) {
            const err = await responseGet.json();
            throw new Error(err.message);
        }

        const data = await responseGet.json();
        Object.values(data).forEach(student => {
            const trElement = document.createElement('tr');

            const tdFirstName = document.createElement('td');
            tdFirstName.textContent = student.firstName;

            const tdLastName = document.createElement('td');
            tdLastName.textContent = student.lastName;

            const tdFacultyNumber = document.createElement('td');
            tdFacultyNumber.textContent = student.facultyNumber;

            const tdGrade = document.createElement('td');
            tdGrade.textContent = student.grade;

            trElement.appendChild(tdFirstName);
            trElement.appendChild(tdLastName);
            trElement.appendChild(tdFacultyNumber);
            trElement.appendChild(tdGrade);
            tbody.appendChild(trElement);
        })

    } catch (error) {
        alert(error.message);
    }
}

async function onSubmit(event) {
    event.preventDefault();      
  
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    if(firstName === '' || lastName === '' || facultyNumber === '' || grade === '') {
        return;
    }
    
    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    } 

    try {
        const responsePost = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(student)
        });
        if(responsePost.ok === false) {
            const err = await responsePost.json();
            throw new Error(err.message);
        }        

    } catch (error) {
        alert(error.message);
    }   

    onLoad();   

}



