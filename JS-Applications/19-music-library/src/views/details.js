import { addLike, deleteRecord, getById, getLikeForUser, getTotalLikesCount } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, isOwner, totalLikes, userData, hasLiked, onDelete, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

          <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${userData && !isOwner && !hasLiked
            ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
            : ''}            

            ${isOwner 
            ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : ''}            
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const album = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === album._ownerId;

    const totalLikes = await getTotalLikesCount(ctx.params.id);

    let hasLiked;

    if(userData) {
        hasLiked = await getLikeForUser(ctx.params.id, userData.id);
    }

    ctx.render(detailsTemplate(album, isOwner, totalLikes, userData, hasLiked, onDelete, onLike));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this album?');
        if(decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await addLike(ctx.params.id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}