import { showHome } from "./home.js";

const section = document.getElementById('form-login');
const form = document.getElementById('login-form');
form.addEventListener('click', onLogin);

export function showLogin(ev) {
    ev?.preventDefault();
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    section.style.display = 'block';
}

async function onLogin(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    

    try {
        if(email === '' || password === '') {
            throw new Error('All fields are required!');
        }

        const res = await fetch('http://localhost:3030/users/login', {
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