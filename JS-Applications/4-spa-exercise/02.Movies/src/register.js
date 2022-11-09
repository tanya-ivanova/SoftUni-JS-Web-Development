import { showHome } from "./home.js";

const section = document.getElementById('form-sign-up');
const form = document.getElementById('register-form');
form.addEventListener('click', onRegister);

export function showRegister(ev) {
    ev?.preventDefault();
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    section.style.display = 'block';
}

async function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');
    

    try {
        if(email === '' || password === '') {
            throw new Error('All fields are required!');
        }
        if(password.length < 6) {
            throw new Error('The password should be at least 6 characters long');
        }
        if(password !== repass) {
            throw new Error('Passwords must match!');
        }

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));
        form.reset();
        showHome();        

    } catch (error) {
        alert(error.message);
    }
}