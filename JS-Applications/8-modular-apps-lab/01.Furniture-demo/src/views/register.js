import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onSubmit, errorMsg, errors, onReveal, revealPassword) => html`
<div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
      ${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class=${'form-control' + (errors.email ? ' is-invalid' : '')} id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input class=${'form-control' + (errors.password ? ' is-invalid' : '')} id="password" type=${revealPassword ? 'text' : 'password'} name="password"/>
          <label><input type="checkbox" @change=${onReveal}>Reveal</label>
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input class=${'form-control' + (errors.rePass ? ' is-invalid' : '')} id="rePass" type="password" name="rePass"/>
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
</form>`;

export function registerPage(ctx) {
    update(null, {});
    
    function update(errorMsg, errors, revealPassword) {
        ctx.render(registerTemplate(onSubmit, errorMsg, errors, onReveal, revealPassword));
    }

    function onReveal(event) {
        event.preventDefault();
        update('', {}, event.target.checked)
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData= new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();
      
        try {
            if(email === '' || password === '') {
                throw {
                    error: new Error('All fields are requried!'),
                    errors: {
                        email: email === '',
                        password: password === '',
                        rePass: rePass === ''
                    }
                };
            }
            if(password !== rePass) {
                throw {
                    error: new Error('Passwords don\'t match!'),
                    errors: {
                        password: true,
                        rePass: true
                    }
                };
            }

            await register(email, password);
            event.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/');

        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors || {});
        }
    }
}