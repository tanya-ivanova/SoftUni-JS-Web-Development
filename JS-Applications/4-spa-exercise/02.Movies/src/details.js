import { onDelete } from "./delete.js";
import { onEdit } from "./edit.js";
import { onLike } from "./like.js";
import { showMovie } from "./movie.js";

const section = document.getElementById('movie-example');

document.getElementById('edit-btn').addEventListener('click', onEdit);
document.getElementById('delete-btn').addEventListener('click', onDelete);
document.getElementById('like-btn').addEventListener('click', onLike);

export function showDetails(ev) {
    if(ev.target.tagName === 'A') {
        ev.preventDefault();
        document.querySelectorAll('section').forEach(s => s.style.display = 'none');
        section.style.display = 'block';
    }

    const movieId = ev.target.id;    
    const ownerId = ev.target.dataset.ownerid;
    
    showMovie(movieId, ownerId);    
}

