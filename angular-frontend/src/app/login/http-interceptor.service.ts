import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
      console.log(this.authenticationService.getSessionToken())
      let token = `Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`
      if(this.authenticationService.username == undefined){
        token = this.authenticationService.getSessionToken()
      }
      
      const authReq = req.clone({
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              //'Authorization': `${this.authenticationService.getSessionToken()}`
              'Authorization': token
          })
      });
      return next.handle(authReq);
    } else {
        return next.handle(req);
    }
  }
}
