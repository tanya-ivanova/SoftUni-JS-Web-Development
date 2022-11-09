import { getById, updateRecord } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (meme, onSubmit) => html`
`;

export async function editView(ctx) {
    const meme = await getById(ctx.params.id);
    ctx.render(editTemplate(meme, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const meme = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if(meme.title === '' || meme.description === '' || meme.imageUrl === '') {
            return alert('All fields are required!');
        }

        await updateRecord(ctx.params.id, meme);
        event.target.reset();
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}