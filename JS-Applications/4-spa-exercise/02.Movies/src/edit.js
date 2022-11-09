import { showMovie } from "./movie.js";

const section = document.getElementById('edit-movie');
const sectionDetails = document.getElementById('movie-example');
const form = document.getElementById('edit-form');
form.addEventListener('submit', onSubmit);

const titleElement = section.querySelector('[name="title"]');
const descriptionElement = section.querySelector('textarea.form-control');
const imgElement = section.querySelector('[name="img"]');

let movieId = '';
let ownerId = '';

export function onEdit(ev) {
    ev.preventDefault();

    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    section.style.display = 'block';

    titleElement.value = ev.target.dataset.title;
    descriptionElement.value = ev.target.dataset.description;
    imgElement.value = ev.target.dataset.img;

    movieId = ev.target.id;
    ownerId = ev.target.dataset.ownerid;
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

        const res = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
            method: 'PUT',
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
        
        document.querySelectorAll('section').forEach(s => s.style.display = 'none');
        sectionDetails.style.display = 'block';

        showMovie(movieId, ownerId);

    } catch (error) {
        alert(error.message)
    }
}