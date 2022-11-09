import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showAbout } from './about.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { checkUserNav, onLogout } from './util.js';
import { showCreate} from './create.js';

checkUserNav();
showHome();

document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', onLogout);

const sections = {
    homeBtn: showHome,
    catalogBtn: showCatalog,
    aboutBtn: showAbout,
    loginBtn: showLogin,
    registerBtn: showRegister,
    createBtn: showCreate
}

function onNavigate(event) {
    if(event.target.tagName === 'A') {           
        const view = sections[event.target.id];        
        
        if(typeof view === 'function') {
            event.preventDefault();            
            view();
        }
    }
}








