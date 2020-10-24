import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ActivatedRoute } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  // isLogged: boolean = false;
 
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    public  basicAuthentication: BasicAuthenticationService

  ) {}

  name = sessionStorage.getItem('authenticatUser');
  
  ngOnInit(): void {
    // this.isLogged = this.hardcodedAuthenticationService.isLogged();
    //console.log(name)
  }
}
