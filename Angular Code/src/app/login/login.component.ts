import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'invilde username or password ';
  check = false;
  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthentication: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}
  log() {
    if (this.hardcodedAuthentication.authenticat(this.username)) {
      this.router.navigate(['welcome', this.username]);
      this.check = false;
    } else {
      this.check = true;
    }
  }

  handelBasicAuth() {
    this.basicAuthentication.executeAuthenticationBasic(
      this.username,
      this.password
    ).subscribe(
      data=>{
        console.log(data); 
        this.router.navigate(['welcome', this.username]);
        this.check = false;
      },
      error=>{
        console.log(error); 
        this.check = true;
      });
  }

  handelJWTAuth() {
   // console.log(this.username,this.password); 

    this.basicAuthentication.executeAuthenticationJWT(
      this.username,
      this.password
    ).subscribe(
      data=>{
        //console.log(data); 
        this.router.navigate(['welcome', this.username]);
        this.check = false;
      },
      error=>{
        console.log(error); 
        this.check = true;
      });
  }
}
