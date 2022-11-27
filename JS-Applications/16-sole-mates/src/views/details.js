import { deleteRecord, getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (sole, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${sole.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${sole.brand}</span></p>
            <p>
                Model: <span id="details-model">${sole.model}</span>
            </p>
            <p>Release date: <span id="details-release">${sole.release}</span></p>
            <p>Designer: <span id="details-designer">${sole.designer}</span></p>
            <p>Value: <span id="details-value">${sole.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner 
            ? html`
            <a href="/edit/${sole._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : ''}              
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const sole = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id === sole._ownerId;

    ctx.render(detailsTemplate(sole, isOwner, onDelete));

    async function onDelete() {
        const decision = confirm('Are you sure you want to delete this item?');
        if(decision) {
            await deleteRecord(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}