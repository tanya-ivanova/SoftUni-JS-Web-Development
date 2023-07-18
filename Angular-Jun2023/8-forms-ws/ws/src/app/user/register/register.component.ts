import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form = this.fb.group({
        email: ['', [
            Validators.required,
            appEmailValidator(DEFAULT_EMAIL_DOMAINS),
        ]],
        username: ['', [
            Validators.required,
            Validators.minLength(5),
        ]],
        tel: [''],
        passGroup: this.fb.group({
            password: ['', [
                Validators.required,
                Validators.minLength(5),
            ]],
            rePassword: ['', [
                Validators.required,
            ]],
        }, {
            validators: [matchPasswordsValidator("password", "rePassword")]
        })
    });

    constructor(private fb: FormBuilder) { }

    register() {
        console.log(this.form.value);
        if(this.form.invalid) {
            return;
        }
    }
}
