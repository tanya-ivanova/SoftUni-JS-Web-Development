import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (soles) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">                     
    ${soles.length === 0 
    ? html`<h2>There are no items added yet.</h2>`
    : soles.map(soleCard)}         
    </ul>
</section>`;

const soleCard = (sole) => html`
<li class="card">
    <img src=${sole.imageUrl} alt="eminem" />
    <p>
        <strong>Brand: </strong><span class="brand">${sole.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${sole.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${sole.value}</span>$</p>
    <a class="details-btn" href="/details/${sole._id}">Details</a>
</li>`;

export async function catalogView(ctx) {
    const soles = await getAll();
    ctx.render(catalogTemplate(soles));
}