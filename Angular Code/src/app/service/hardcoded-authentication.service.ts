import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticat(username){
    if(username==="mahmoud")
 {
   sessionStorage.setItem('authenticatUser',username);
   return true;
 }else{
   return false
 }
  }

  isLogged(){
    const user = sessionStorage.getItem('authenticatUser');
    return !(user === null)
  }

  loggedout(){
   sessionStorage.removeItem('authenticatUser');
  }
}
