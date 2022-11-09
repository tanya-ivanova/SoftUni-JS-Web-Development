import { register } from "../api/users.js";
import { html } from "../lib.js";

const registerTemplate = (onSubmit) => html`
`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim();
        const gender = formData.get('gender');

        if (username === '' || email === '' || password === '' || repass === '') {
            return alert('All fields are required!');
        }

        if(password !== repass) {
            return alert('Passwords don\'t match!');
        }

        await register(username, email, password, gender);
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}