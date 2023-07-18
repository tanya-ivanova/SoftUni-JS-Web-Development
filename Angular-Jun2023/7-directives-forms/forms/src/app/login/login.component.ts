import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm') loginForm: NgForm | undefined;

    ngOnInit(): void {
        //only the static content will be rendered
        
    }

    ngAfterViewInit() {
        //will render the final content with the dynamic components
        this.loginForm?.valueChanges?.subscribe(console.log);
    }

    submitHandler(form: NgForm): void {
        // if(!this.loginForm) {
        //     return;
        // }

        if(form.invalid) {
            return;
        }

        const value: {
            email: string;
            password: string;
        } = form.value;

        //form.reset();
        form.setValue({
            email: '',
            password: ''
        });
    }
}
