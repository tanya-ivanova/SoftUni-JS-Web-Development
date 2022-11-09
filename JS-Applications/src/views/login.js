import { login } from "../api/users.js";
import { html } from "../lib.js";

const loginTemplate = (onSubmit) => html`
`;

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData= new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if(email === '' || password === '') {
            return alert('All fields are required!');
        }

        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}