import { isMovieLiked } from "./liked.js";
import { getToken, getUserId } from "./util.js";

export async function onLike(ev) {
    ev.preventDefault();

    const movieId = ev.target.id;
    const accessToken = getToken();
    const userId = getUserId();    
    
    try {
        const res = await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({
                movieId
            })
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        isMovieLiked(movieId, userId);

    } catch (error) {
        alert(error.message);
    }
}

