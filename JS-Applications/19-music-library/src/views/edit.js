import { getById, updateRecord } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (album, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer}>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album}>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl}>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release}>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label}>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales}>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editView(ctx) {
    const album = await getById(ctx.params.id);
    ctx.render(editTemplate(album, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const album = {
            singer: formData.get('singer'),
            album: formData.get('album'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            label: formData.get('label'),
            sales: formData.get('sales')
        };

        if (album.singer === '' || album.album === '' || album.imageUrl === ''
        || album.release === '' || album.label === '' || album.sales === '') {
            return alert('All fields are required!');
        }

        await updateRecord(ctx.params.id, album);
        event.target.reset();
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}