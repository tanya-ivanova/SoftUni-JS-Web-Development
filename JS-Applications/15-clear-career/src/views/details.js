import { getApplicationByUser, getTotalApplicationsCountByOfferId, makeApplication } from "../api/application.js";
import { deleteRecord, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (offer, userData, isOwner, onDelete, hasApplied, totalApplications, onApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
         </div>
        <p>Applications: <strong id="applications">${totalApplications}</strong></p>

        <div id="action-buttons">
        ${isOwner 
        ? html`        
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        : ''}
        ${(userData && !isOwner && !hasApplied)
        ? html`
        <!--Bonus - Only for logged-in users ( not authors )-->
        <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
        : ''}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const offer = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === offer._ownerId;

    let totalApplications = await getTotalApplicationsCountByOfferId(ctx.params.id);

    let hasApplied;
    if(userData) {
        hasApplied = await getApplicationByUser(ctx.params.id, userData.id);
    }

    ctx.render(detailsTemplate(offer, userData, isOwner, onDelete, hasApplied, totalApplications, onApply));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this item?');
        if(decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onApply() {
        await makeApplication(ctx.params.id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}