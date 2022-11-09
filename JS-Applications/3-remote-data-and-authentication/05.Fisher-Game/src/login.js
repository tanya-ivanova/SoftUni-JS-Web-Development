const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const loginBtn = document.querySelector('#login button');

loginBtn.addEventListener('click', onLogin);

async function onLogin(event) {
    event.preventDefault();

    try {
        if(email.value === '' || password.value === '') {
            throw new Error('All fields are required!');
        }

        const user = {
            email: email.value,
            password: password.value
        }

        email.value = '';
        password.value = '';

        const response = await fetch(`http://localhost:3030/users/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();

        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);

        window.location = '../src/index.html';

    } catch (error) {
        alert(error.message);
    }
}