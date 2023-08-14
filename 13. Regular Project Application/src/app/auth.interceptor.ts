import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let user = localStorage.getItem('user');
    if (user !== null) {
      let token: string = JSON.parse(user).accessToken;
      const modifiedRequest = request.clone({
        setHeaders: {
          'X-Authorization': token
        }
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};