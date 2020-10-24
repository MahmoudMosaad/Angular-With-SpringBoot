import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Hello {
  constructor(public message: string) {}
}


@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  helloSpringBoot() {
    return this.http.get<Hello>('http://localhost:8080/basicauth');
  }

  // helloSpringBootWithPathVariable(name) {
  //   return this.http.get<Hello>(
  //     `http://localhost:8080/welcome-pathvariable/${name}`
  //   );
  // }

 
}
