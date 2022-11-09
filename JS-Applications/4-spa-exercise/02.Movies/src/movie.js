import { getLikes, isMovieLiked } from "./liked.js";

const movieTitleElement = document.getElementById('movie-title');
const movieImgElement = document.getElementById('movie-img');
const movieDescriptionElement = document.getElementById('movie-description');
const editBtn = document.getElementById('edit-btn');
const deleteBtn = document.getElementById('delete-btn');
export const likeBtn = document.getElementById('like-btn');
export const liked = document.querySelector('#movie-example span');
const currentUserId = JSON.parse(sessionStorage.getItem('user'))._id;

export async function showMovie(movieId, ownerId) {
    try {
        const res = await fetch(`http://localhost:3030/data/movies/${movieId}`);
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const movie = await res.json();

        movieTitleElement.textContent = movie.title;
        movieImgElement.src = movie.img;
        movieDescriptionElement.textContent = movie.description;

        editBtn.id = movieId;
        editBtn.setAttribute('data-title', movie.title);
        editBtn.setAttribute('data-img', movie.img);
        editBtn.setAttribute('data-description', movie.description);
        editBtn.setAttribute('data-ownerid', ownerId);        

        deleteBtn.id = movieId;

        likeBtn.id = movieId;


        if(currentUserId === ownerId) {
            deleteBtn.style.display = 'block';
            editBtn.style.display = 'block';
            likeBtn.style.display = 'none';
            liked.style.display = 'none';
        } else {
            deleteBtn.style.display = 'none';
            editBtn.style.display = 'none';

            isMovieLiked(movieId, currentUserId);
                    
        }       

    } catch (error) {
        alert(error.message);
    }
}