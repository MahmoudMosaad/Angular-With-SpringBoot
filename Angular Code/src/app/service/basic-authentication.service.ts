import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const AUTHENTICATION_USER = 'authenticatUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthenticationBasic(userName, password) {
    let basicHesderString = 'Basic ' + window.btoa(userName + ':' + password);

    let header = new HttpHeaders({
      Authorization: basicHesderString,
    });
    return this.http
      .get<AuthBean>(`http://localhost:8080/basicauth`, { headers: header })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATION_USER, userName);
          sessionStorage.setItem(TOKEN, basicHesderString);
          return data;
        })
      );
  }

  executeAuthenticationJWT(userName, password) {
   
    return this.http
      .post<any>('http://localhost:8080/authenticate', { 
        "username":userName,
        "password" : password
       })
      .pipe(
        map((data) => {
          //console.log(userName)
          sessionStorage.setItem(AUTHENTICATION_USER, userName);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
  }

  executeSignUpJWT(userName, password) {
   
    return this.http
      .post<any>('http://localhost:8080/sign-up', { 
        "username":userName,
        "password" : password
       });
  }


  getAuthenticationUser() {
    return sessionStorage.getItem(AUTHENTICATION_USER);
  }
  getAuthenticationuToken() {
    if (this.getAuthenticationUser()) return sessionStorage.getItem(TOKEN);
  }

  isLogged() {
    const user = sessionStorage.getItem(AUTHENTICATION_USER);
    return !(user === null);
  }

  loggedout() {
    sessionStorage.removeItem(AUTHENTICATION_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthBean {
  constructor(public message: string) {}
}
