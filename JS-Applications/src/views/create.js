import { createRecord } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`
`;

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

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

        await createRecord(meme);
        event.target.reset();
        ctx.page.redirect('/catalog');
    }
}