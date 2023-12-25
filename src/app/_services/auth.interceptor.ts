import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, switchMap, mergeMap } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.indexOf('/auth/refresh/') !== -1) {
      return next.handle(request)
    }
    const data = this.authService.userData 

    if(data) {
      if(this.authService.isAuthTokenValid(data.access_token)) {
        let modifiedReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${data.access_token}`)
        })
        return next.handle(modifiedReq)
      }


    return this.authService.generateNewTokens().pipe(
          take(1), 
          switchMap((res: any) => {
            console.log(res, 'generate new tokens')
            let token = res.access
            let modifiedReq = request.clone({
              headers: request.headers.set('Authorization', `Bearer ${token}`)
            })
            return next.handle(modifiedReq)
          })
        )
      }
      return next.handle(request)
    }  
}
