import { showHome } from "./home.js";

const section = document.getElementById('add-movie');
const form = document.getElementById('add-movie-form');
form.addEventListener('submit', onSubmit);

export function showAdd(ev) {
    ev.preventDefault();

    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    section.style.display = 'block';
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    const accessToken = JSON.parse(sessionStorage.getItem('user')).accessToken;

    try {
        if(title === '' || description === '' || img === '') {
            throw new Error('All fields are required!');
        }

        const res = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({
                title,
                description,
                img
            })
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        form.reset();
        showHome();

    } catch (error) {
        alert(error.message)
    }
}