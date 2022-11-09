const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const repass = document.querySelector('[name="rePass"]');
const registerBtn = document.querySelector('#register button');

registerBtn.addEventListener('click', onRegister);

async function onRegister(event) {
    event.preventDefault();

    try {
        if(email.value === '' || password.value === '') {
            throw new Error('All fields are required!')
        }
        if(password.value !== repass.value) {
            throw new Error('Passwords must match!');
        }

        const user = {
            email: email.value,
            password: password.value
        }

        email.value = '';
        password.value = '';
        repass.value = '';

        const response = await fetch('http://localhost:3030/users/register', {
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