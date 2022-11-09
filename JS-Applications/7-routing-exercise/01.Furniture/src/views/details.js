import {html} from '../../node_modules/lit-html/lit-html.js'
import { getById } from '../data/furnitures.js';

const detailsTemplate = (furniture) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
${furniture ? html`
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="../.${furniture.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price}</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        <div>
            <a href=”/${furniture._id}/edit” class="btn btn-info">Edit</a>
            <a href=”/${furniture._id}/delete” class="btn btn-red">Delete</a>
        </div>
    </div>
</div>` : 'Loading...'}`;

export async function detailsView(ctx) {
    const productId = ctx.params.productId;

    ctx.render(detailsTemplate());

    const furniture = await getById(productId);
    
    ctx.render(detailsTemplate(furniture));
}