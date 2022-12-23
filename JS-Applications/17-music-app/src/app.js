import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

const main = document.querySelector('#main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/search', searchView);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}

function renderMain(templateResult) {
    render(templateResult, main);
}

function updateNav() {
    const userData = getUserData();

    if(userData) {
        document.querySelectorAll('.user').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');        
    } else {
        document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}