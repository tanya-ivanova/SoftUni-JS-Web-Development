import { createComment, loadAllComments } from "../api/comments.js";
import { deleteRecord, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";
import { commentFormView } from "./commentForm.js";
import { commentsView } from "./comments.js";

const detailsTemplate = (game, isOwner, onDelete, commentsSection, commentFormSection) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        
        ${commentsSection}

        ${isOwner
        ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`
        : ''}

        ${commentFormSection}

    </div>

</section>`;

export async function detailsView(ctx) {
    const [game, commentsSection] = await Promise.all([
        getById(ctx.params.id),
        commentsView(ctx.params.id)
    ]);
    
    const userData = getUserData();
    const isOwner = userData?.id === game._ownerId;
    
    const commentFormSection = commentFormView(ctx, userData, isOwner);

    ctx.render(detailsTemplate(game, isOwner, onDelete, commentsSection, commentFormSection));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this item?');
        if (decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/');
        }
    }    
}