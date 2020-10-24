import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicService implements HttpInterceptor {
  constructor(private basicAuthenticationService : BasicAuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let userName = 'mahmoud';
    // let password = 'pass';
    // let basicHesderString = 'Basic ' + window.btoa(userName + ':' + password);

    let basicHesderString = this.basicAuthenticationService.getAuthenticationuToken();
    let username = this.basicAuthenticationService.getAuthenticationUser();
    if(basicHesderString && username)
   { req = req.clone({
      setHeaders :
     { Authorization : basicHesderString },
    })
  }
    return next.handle(req)
  }
}
