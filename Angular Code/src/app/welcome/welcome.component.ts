import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../service/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = this.route.snapshot.params['name'] //sessionStorage.getItem('authenticatUser')
  welcome = 'welcome '+ this.name;
  welcomeMessage :string;
  
  //mess : boolean = false
  constructor(private route: ActivatedRoute,
    private welcomeService : WelcomeService) { }

  ngOnInit(): void {
  }

  getmessage(){
   // this.name = sessionStorage.getItem('authenticatUser');
    this.route.snapshot.params['name']
       console.log(`name is  ${this.name}`);

  //   this.welcomeService.helloSpringBoot().subscribe(
  //     response => this.handelSeccessResponse(response),
  //     error=> this.handelErrorResponse(error)
  //   )
  //  // this.mess = true;

  }

  getmessageWithPathVariable(){
    // console.log(this.welcomeService.helloSpringBoot());
   
    this.welcomeService.helloSpringBoot().subscribe(
      response => this.handelSeccessResponse(response),
      error=> this.handelErrorResponse(error)
    )
   // this.mess = true;
  }

 

  handelSeccessResponse(response)
  {
    console.log(response)
    this.welcomeMessage = response.message;
  }



  handelErrorResponse(error)
  {
    console.log(error);
    this.welcomeMessage =error.error.error;
    
  }

}
