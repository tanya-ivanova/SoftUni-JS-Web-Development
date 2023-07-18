import {ValidatorFn, FormGroup} from '@angular/forms';

export function matchPasswordsValidator(passwordControl: string, repassControl: string): ValidatorFn {
    return(control) => {
        const group = control as FormGroup;
        const pass1 = group.get(passwordControl);
        const pass2 = group.get(repassControl);

        return pass1?.value === pass2?.value ? null : {matchPasswordsValidator: true};
    }
}