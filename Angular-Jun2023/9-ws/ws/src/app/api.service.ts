import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getThemes() {
        const { appUrl } = environment;
        return this.http.get<Theme[]>(`${appUrl}/themes`);
    }

    getTheme(id: string) {
        const { appUrl } = environment;
        return this.http.get<Theme>(`${appUrl}/themes/${id}`);
    }

    createTheme(themeName: string, postText: string) {
        return this.http.post<Theme>('/api/themes', {themeName, postText});
    }

    getPosts(limit?: number) {
        const { appUrl } = environment;
        return this.http.get<Post[]>(`${appUrl}/posts${limit ? `?limit=${limit}` : ''}`);
    }
}
