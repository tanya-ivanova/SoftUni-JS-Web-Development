import { html, render } from '../node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js';

const section = document.getElementById('allCats');

const catsTemplate = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap"></img>
        <div class="info">
            <button class="showBtn" @click=${onClick}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.id}</h4>
                <p>${cat.statusMessage}</p>
            </div>
    </li>`)}
</ul>`;

render(catsTemplate(cats), section);

function onClick(event) {
    const divStatus = event.target.parentElement.children[1];
    
    if(event.target.textContent === 'Show status code') {
        divStatus.style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        divStatus.style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}