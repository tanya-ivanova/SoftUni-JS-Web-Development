import { addLike, deleteRecord, getById, getLikeForUser, getTotalLikesCount } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (theatre, isOwner, totalLikes, userData, hasLiked, onDelete, onLike) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theatre.title}</h1>
            <div>
                <img src=${theatre.imageUrl}>
            </div>
        </div>
        <div class="details">
            <h3>Theater Description</h3>
            <p>${theatre.description}</p>
            <h4>Date: ${theatre.date}</h4>
            <h4>Author: ${theatre.author}</h4>
            <div class="buttons">
                ${isOwner
                ? html`
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${theatre._id}">Edit</a>`
                : ''}
                ${userData && !isOwner && !hasLiked
                ? html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                : ''}
            </div>
            <p class="likes">Likes: ${totalLikes}</p>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const theatre = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === theatre._ownerId;

    const totalLikes = await getTotalLikesCount(ctx.params.id);

    let hasLiked;

    if(userData) {
        hasLiked = await getLikeForUser(ctx.params.id, userData.id);
    }
    

    ctx.render(detailsTemplate(theatre, isOwner, totalLikes, userData, hasLiked, onDelete, onLike));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this item?');
        if(decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/profile');
        }
    }

    async function onLike() {
        await addLike(ctx.params.id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}