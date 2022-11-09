import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">    
        ${memes.length === 0 
        ? html`<p class="no-memes">No memes in database.</p>`
        : memes.map(memeCard)}        
    </div>
</section>`;

const memeCard = (meme) => html`
`;

export async function catalogView(ctx) {
    const memes = await getAll();
    ctx.render(catalogTemplate(memes));
}