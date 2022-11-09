import page from '../node_modules/page/page.mjs';
import { logout } from './api/user.js';
import { updateNav } from './midllewares/navbar.js';
import { preload } from './midllewares/preload.js';
import { decorateContext } from './midllewares/render.js';
import { addSession } from './midllewares/session.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
    page.redirect('/');
})

page(addSession);
page(updateNav);
page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', preload, detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);

page.start();


