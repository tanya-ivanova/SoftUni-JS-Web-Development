import {render} from '../../node_modules/lit-html/lit-html.js';

const root = document.querySelector('main');
const loader = document.getElementById('spinner');

function show() {
    loader.style.display = '';
}

function hide() {
    loader.style.display = 'none';
}

function ctxRender(content) {
    hide();    
    render(content, root);
}

export function decorateContext(ctx, next) {
    show();    
    ctx.render = ctxRender; 
    next();
}