import page from "./node_modules/page/page.mjs";
import { html, render } from "./node_modules/lit-html/lit-html.js";
import {loginView} from './views/login.js';
import { catalogView } from "./views/catalog.js";
import { registerView } from "./views/register.js";
import { logout } from "./views/logout.js";
import { createView } from "./views/create.js";
import { myPublicationsView } from "./views/my-publications.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/', '/catalog');
page('/create', createView);
page('/myFurniture', myPublicationsView);
page('/details/:detailsId', detailsView);
page('edit/:detailsId', editView);

page.start();

document.getElementById('logoutBtn').addEventListener('click', logout);

export const updateInfo = () => {
    const userDiv = document.getElementById('user');
    const guestDiv = document.getElementById('guest');

    if(localStorage.length === 0) {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'inline-block';
    } else {
        userDiv.style.display = 'inline-block';
        guestDiv.style.display = 'none';
    }
}

updateInfo();



