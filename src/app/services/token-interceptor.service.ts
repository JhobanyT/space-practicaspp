import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req:any, next: any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `token-space ${this.authService.getToken()}`
      }
    });
    console.log(tokenizeReq)
    return next.handle(tokenizeReq);
  }

}
