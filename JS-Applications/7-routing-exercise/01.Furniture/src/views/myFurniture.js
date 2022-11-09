import {html} from '../../node_modules/lit-html/lit-html.js'
import {repeat} from '../../node_modules/lit-html/directives/repeat.js'
import { getMyFurnitures } from '../data/furnitures.js';

const catalogTemplate = (furnitures) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${repeat(furnitures, (f) => f._id, furnitureCard)}
</div>`;

const furnitureCard = (furniture) => html`
<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src="../.${furniture.img}" />
      <p>${furniture.description}</p>
      <footer>
        <p>Price: <span>${furniture.price} $</span></p>
      </footer>
      <div>
        <a href="#" class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

export async function myFurnitureView(ctx) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData.id;
    const furnitures = await getMyFurnitures(userId);
    ctx.render(catalogTemplate(furnitures));
    ctx.checkUserNav();
}