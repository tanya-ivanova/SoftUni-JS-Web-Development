import { html } from "../lib.js";
import { getUserData } from "../util.js";

const homeTemplate = () => html`
`;

export function homeView(ctx) {
    if(getUserData()) {
        ctx.page.redirect('/catalog');
    } else {
        ctx.render(homeTemplate());
    }
}