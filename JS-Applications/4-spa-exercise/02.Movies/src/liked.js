import { likeBtn, liked } from "./movie.js";

export async function isMovieLiked(movieId, currentUserId) {
    try {
        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${currentUserId}%22`);
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const like = await res.json();        
        if(like.length === 0) {
            liked.style.display = 'none';
            likeBtn.style.display = 'block';
            
        } else {
            const likes = await getLikes(movieId);
            liked.textContent = `Liked ${likes}`;
            liked.style.display = 'block';
            likeBtn.style.display = 'none';
            
        }
        
    } catch (error) {
        alert(error.message);
    }
}

export async function getLikes(movieId) {
    try {
        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const likes = await res.json();       

        return likes;

    } catch (error) {
        alert(error.message);
    }
}