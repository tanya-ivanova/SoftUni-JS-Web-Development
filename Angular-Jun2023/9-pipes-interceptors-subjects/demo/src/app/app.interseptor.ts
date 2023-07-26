import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, catchError, tap, EMPTY} from 'rxjs';
import { API_URL } from './constants';
import { Provider } from '@angular/core';

export class AppInterseptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;        

        if(req.url.startsWith('/api')) {            
            request = req.clone({
                url: req.url.replace('/api', API_URL)
            })
        }

        return next.handle(request).pipe(
            tap((req) => {
                if(req instanceof HttpRequest) {
                    console.log(req);
                }
            }),
            catchError((err) => {
                if(err.status === 0) {
                    console.error(`Error from interceptor: ${err}`);
                    return EMPTY;
                }

                return [err];
            })
        )
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterseptor
}