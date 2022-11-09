import { get } from "./api.js";

export function onLogout(ctx) {    
    get('/users/logout');

    sessionStorage.removeItem('userData');
    ctx.checkUserNav();
    ctx.page.redirect('/');
}

export function createSubmitHandler(form, callback) {
    form.addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);

        callback(Object.fromEntries([...formData.entries()]));
    }
}