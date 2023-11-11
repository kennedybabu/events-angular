import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.indexOf('/auth/refresh/') !== -1) {
      return next.handle(request)
    }
    const data = this.authService.userData 
    const access_token = data?.access_token 

    if(access_token) {
      if(this.authService.isAuthTokenValid(access_token)) {
        console.log('called -1')
        let modifiedReq = request.clone({
          headers: request.headers.append('Authorization', `Bearer ${access_token}`)
        })
        return next.handle(modifiedReq)
      }

      return this.authService.generateNewTokens() 
        .pipe(
          take(1), 
          switchMap((res: any) => {
            console.log('gen token')
            let modifiedReq = request.clone({
              headers: request.headers.append('Authorization', `Bearer ${res?.access}`)
            })
            return next.handle(modifiedReq)
          })
        )
      }
      return next.handle(request)
    }  
}
