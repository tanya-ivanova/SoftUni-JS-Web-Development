import { createHistoryRouter } from "./historyRouter.js";

const views = {
    '/': () => '<h2>Home page</h2><p>Welcome to our site!</p>',
    '/home': () => '<h2>Home page</h2><p>Welcome to our site!</p>',
    '/catalog': () => '<h2>Catalog</h2><ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>',
    '/about': () => '<h2>About us</h2><p>Contact +2342345637</p>'
}

const main = document.querySelector('main');

const getName = createHistoryRouter(main, views, start);

start(getName());

function start(name) {    
    const view = views[name];
    if(typeof view === 'function') {
        main.innerHTML = view();
        return true;
    }
    return false;
}

