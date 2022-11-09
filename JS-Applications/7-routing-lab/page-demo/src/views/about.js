import {html} from '../../node_modules/lit-html/lit-html.js'

const aboutTemplate = () => html`
<h2>About us</h2>
<p>Contact +2342345637</p>`;

export function showAbout(ctx) {
    ctx.render(aboutTemplate());
}