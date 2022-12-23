import { getByUser } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (theatres, userData) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
        ${theatres.length === 0
        ? html`
        <div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : theatres.map(theatreCard)}        
    </div>
</section>`;

const theatreCard = (theatre) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${theatre.imageUrl}>
        <h2>${theatre.title}</h2>
        <h6>${theatre.date}</h6>
        <a href="/details/${theatre._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function profileView(ctx) {
    const userData = getUserData();
    const theatres = await getByUser(userData.id);
    ctx.render(profileTemplate(theatres, userData));
}