import {showHome} from "./home.js";
import { getToken } from "./util.js";

export async function onDelete(ev) {
    ev.preventDefault();

    const id = ev.target.id;
    const accessToken = getToken;

    try {
        const res = await fetch(`http://localhost:3030/data/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            }
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        
        showHome();

    } catch (error) {
        alert(error.message);
    }
}