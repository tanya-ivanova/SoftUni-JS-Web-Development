import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";
import { searchPage } from "./views/search.js";

const main = document.getElementById('site-content');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/profile', profileView);
page('/search', searchPage);

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
        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#profile a').textContent = `Welcome, ${userData.username}`;
    } else {
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}