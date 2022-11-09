import { createComment, loadAllComments } from "../api/comments.js";
import { deleteRecord, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, isOwner, onDelete, comments, userData, onAddComment) => html`
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

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
            ${comments.length === 0
            ? html`<p class="no-comment">No comments.</p>`
            : comments.map(commentCard)}
        </div>

        ${isOwner
        ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`
        : ''}

        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
        ${(userData && !isOwner)
        ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${onAddComment} class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>`
        : ''}

    </div>

</section>`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}.</p>
</li>`;

export async function detailsView(ctx) {
    const [game, comments] = await Promise.all([
        getById(ctx.params.id),
        loadAllComments(ctx.params.id)
    ]);
    //const game = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === game._ownerId;

    //const comments = await loadAllComments(ctx.params.id);    

    ctx.render(detailsTemplate(game, isOwner, onDelete, comments, userData, onAddComment));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this item?');
        if (decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onAddComment(event) {
        event.preventDefault();
        const formData = new FormData(event.target);        

        const comment = {
            gameId: ctx.params.id,
            comment: formData.get('comment')
        }

        if(comment.comment === '') {
            return alert('Please fill the comment!');
        }

        await createComment(comment);
        event.target.reset();
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}