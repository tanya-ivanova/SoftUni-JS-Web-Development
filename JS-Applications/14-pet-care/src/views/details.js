import { deleteRecord, getById } from "../api/data.js";
import { getDonationByUser, getTotalDonationCountByPetId, makeDonation } from "../api/donation.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (pet, isOwner, onDelete, totalDonations, userData, hasDonation, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${totalDonations}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                ${isOwner
                ? html`
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                : ''}

                <!--(Bonus Part) Only for no creator and user-->
                ${(userData && !isOwner && !hasDonation)
                ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
                : ''}
                
            </div>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const pet = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === pet._ownerId;

    let totalDonations = await getTotalDonationCountByPetId(ctx.params.id);
    totalDonations *= 100;

    let hasDonation;
    if(userData) {
        hasDonation = await getDonationByUser(ctx.params.id, userData.id);
    }

    ctx.render(detailsTemplate(pet, isOwner, onDelete, totalDonations, userData, hasDonation, onDonate));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this pet?');
        if (decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await makeDonation(ctx.params.id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}