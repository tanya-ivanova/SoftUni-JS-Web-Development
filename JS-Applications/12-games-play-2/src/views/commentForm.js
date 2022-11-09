import { html, nothing } from "../lib.js";
import * as commentsService from '../api/comments.js';

const formTemplate = (onSubmit) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`;

export function commentFormView(ctx, userData, isOwner) {
    if(userData && !isOwner) {
        return formTemplate(onSubmit);
    } else {
        return nothing;
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);        

        const comment = {
            gameId: ctx.params.id,
            comment: formData.get('comment')
        }

        if(comment.comment === '') {
            return alert('Please fill the comment!');
        }

        await commentsService.createComment(comment);
        event.target.reset();
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}

