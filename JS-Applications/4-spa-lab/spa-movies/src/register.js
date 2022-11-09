import { showHome } from "./home.js";
import { checkUserNav } from "./util.js";

const section = document.getElementById('registerView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove();

export function showRegister() {
    document.querySelector('main').replaceChildren(section);    
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repass').trim();

    section.querySelector('[name="email"]').value = '';
    section.querySelector('[name="password"]').value = '';
    section.querySelector('[name="repass"]').value = '';

    try {
        if(email === '' || password === '') {
            throw new Error('All fields are required!');
        }

        if(password !== repass) {
            throw new Error('Passwords don\'t match');
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

        const userData = {
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        checkUserNav();
        showHome();

    } catch (error) {
        alert(error.message)
    }
}