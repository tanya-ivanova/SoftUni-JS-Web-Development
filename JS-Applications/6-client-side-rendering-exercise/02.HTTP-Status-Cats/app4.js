import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats as catData } from "./catSeeder.js";
import {styleMap} from './node_modules/lit-html/directives/style-map.js'

const catCard = (cat, toggleInfo) => html`<li>
  <img
    src="./images/${cat.imageLocation}.jpg"
    width="250"
    height="250"
    alt="Card image cap"
  />
  <div class="info">
    <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
    <div class="status" id=${cat.id} style=${styleMap({display: cat.info ? 'block' : 'none'})}>
      <h4>Status Code: ${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div> 
  </div>
</li>`;

const root = document.getElementById('allCats');
update();

function update() {
    render(html`<ul>${catData.map(c => catCard(c, toggleInfo))}</ul>`, root);
}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update();
}