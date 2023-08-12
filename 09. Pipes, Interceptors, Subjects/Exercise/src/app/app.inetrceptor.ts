import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(req => {
                if (req instanceof HttpResponse) { console.log(req.body); }
            }),
            catchError(err => {
                if (err.status === 0) {
                    console.log('unknow err');
                    return [];
                }
                return of(err);
            })
        )
    }
}

export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}