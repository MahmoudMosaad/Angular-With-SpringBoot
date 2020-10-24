import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username = '';
  password = '';
  constructor(private router: Router,
    private basicAuthentication: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handelJWTSignUp() {
    //console.log(this.username,this.password); 
 
     this.basicAuthentication.executeSignUpJWT(
       this.username,
       this.password
     ).subscribe(
       data=>{
         //console.log(data); 
         this.router.navigate(['login']);
         
       },
       error=>{
         console.log(error); 
       });
   }

}
