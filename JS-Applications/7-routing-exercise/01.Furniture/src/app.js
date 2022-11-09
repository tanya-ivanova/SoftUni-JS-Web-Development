import page from '../node_modules/page/page.mjs';
import {render as litRender} from '../node_modules/lit-html/lit-html.js'
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import { myFurnitureView } from './views/myFurniture.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

const container = document.querySelector('div.container');

page(decorateContext);
page('/index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/myFurniture', myFurnitureView);
page('/:productId', detailsView);
page('/:productId/edit', editView);
page('*', notFound);

page.start();

function render(templateResult) {
    litRender(templateResult, container);
}

function checkUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData !== null) {        
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

function decorateContext(ctx, next) {
    ctx.render = render;
    ctx.checkUserNav = checkUserNav;
    next();
}

function notFound(ctx) {
    ctx.render('404 Not Found');
}


