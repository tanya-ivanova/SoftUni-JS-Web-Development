import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-current-theme',
    templateUrl: './current-theme.component.html',
    styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
    theme: Theme | undefined;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private userService: UserService,
    ) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    ngOnInit() {        
        this.fetchTheme();
    }

    fetchTheme(): void {
        const id = this.route.snapshot.params['themeId'];

        this.apiService.getTheme(id).subscribe((fetchedTheme) => {
            this.theme = fetchedTheme;
            console.log(fetchedTheme);
        })
    }
}
