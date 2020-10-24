import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
export class Todo {
  constructor(
    public id: number,
    public user: string,
    public desc: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}
  base = environment.baseurl;

  deletTodo(username, id) {
    return this.http.delete(
       `${this.base}/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username, id) {
    return this.http.get<Todo>(
       `${this.base}/users/${username}/todos/${id}`
    );
  }

  putTodo(username, id, todo) {
    return this.http.put(
       `${this.base}/users/${username}/todos/${id}`,
      todo
    );
  }

  postTodo(username,todo) {
    return this.http.post(
       `${this.base}/users/${username}/todos`,
      todo
    );
  }


  getTodos(username) {
    // let basicHeader = this.basicHeader();
    // let header = new HttpHeaders({
    //   Authorization : basicHeader
    // })
    return this.http.get<Todo[]>(
      `${this.base}/users/${username}/todos`
    );
  }
  
// basicHeader() {
//   let  userName = 'mahmoud';
//   let password = 'pass';
//   let basicHesderString = 'Basic '+ window.btoa(userName+':'+password);
  
//   return basicHesderString ;
// }


}
