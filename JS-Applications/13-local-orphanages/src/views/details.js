import { deleteRecord, getById } from "../api/data.js";
import { getDonationByUser, getDonationsByPostId, makeDonation } from "../api/donation.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (post, isOwner, onDelete, isLoggedIn, donations, onDonate, hasDonation) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                <div class="btns">
                    ${isOwner
            ? html`
                    <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
            : ''}

                ${(() => {
                if (hasDonation == 0) {
                    if (isLoggedIn && !isOwner) {        
                        return html`<a @click=${onDonate}href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                    }
                }
                })()}

                </div>
            </div>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const post = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === post._ownerId;
    const isLoggedIn = userData !== undefined;

    let donations = await getDonationsByPostId(ctx.params.id);

    let hasDonation;
    if (userData) {
        hasDonation = await getDonationByUser(ctx.params.id, userData.id);
    }
    
    ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, donations, onDonate, hasDonation));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this post?');
        if (decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await makeDonation(ctx.params.id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
        
        donations = await getDonationsByPostId(ctx.params.id);
        hasDonation = await getDonationByUser(ctx.params.id, userData.id);
        ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, donations, onDonate, hasDonation));
    }
}