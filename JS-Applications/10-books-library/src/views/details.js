import { deleteBook, getBookById } from "../api/books.js";
import { addLike, getLikeFromUser, getTotalLikesCount } from "../api/likes.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, totalLikes, userData, isLiked, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${isOwner 
            ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="#">Delete</a>`
            : ''}
            
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${(userData && !isOwner && !isLiked)
            ? html`
            <a @click=${onLike} class="button" href="#">Like</a>`
            : ''}            

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsView(ctx) {
    const book = await getBookById(ctx.params.id);
    const userData = getUserData();    
    const isOwner = userData?.id === book._ownerId;

    const totalLikes = await getTotalLikesCount(ctx.params.id);

    let likeFromUser;
    let isLiked;
    if(userData !== null) {
        likeFromUser = await getLikeFromUser(ctx.params.id, userData.id);
    }
    if(likeFromUser === 0) {
        isLiked = false;
    } else if(likeFromUser === 1) {
        isLiked = true;
    }

    ctx.render(detailsTemplate(book, isOwner, totalLikes, userData, isLiked, onDelete, onLike));

    async function onDelete(event) {
        event.preventDefault();
        const choice = confirm('Are you sure you want to delete this book?');
        if(choice) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike(event) {
        event.preventDefault();
        await addLike(ctx.params.id);
        ctx.page.redirect('/catalog/' + ctx.params.id);
    }
}