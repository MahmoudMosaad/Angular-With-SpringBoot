import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../service/data/welcome.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../service/data/todo-service.service';
import { LoadingProviderService } from './../service/loading-provider.service';

export class Todo {
  constructor(
    public id: number,
    public user: string,
    public desc: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  username = sessionStorage.getItem('authenticatUser');
  message: string;
  //   new Todo(1,'mahmoud','Learn angular',new Date,false),
  //   new Todo(2,'mahmoud','Learn restful',new Date,false)
  //   // { id: 1, description: 'Learn angular' },
  //   // { id: 2, description: 'Learn restful' },
  // ];
  constructor(
    private todoServiceService: TodoServiceService,
    private router: Router,
    private loadingProviderService: LoadingProviderService
  ) {}

  ngOnInit(): void {
    // this.todos.push(new todo(2,'Learn springboot',false,new Date))
    this.getTodoFromServer(this.username);
  }
  getTodoFromServer(name) {
    // console.log(this.welcomeService.helloSpringBoot());
    this.loadingProviderService.ViewHttpServiceLoading();
    this.todoServiceService.getTodos(name).subscribe(
      (response) => {
        this.getTodo(response);
        this.loadingProviderService.CloseHttpServiceLoading();
      },
      (error) => this.handelErrorResponse(error)
    );
    // this.mess = true;
  }
  getTodo(response) {
    console.log(response);
    this.todos = response;
  }

  handelErrorResponse(error) {
    console.log(error);
  }

  deleteTodo(id) {
    this.loadingProviderService.ViewHttpServiceLoading();
    this.todoServiceService
      .deletTodo(this.username, id)
      .subscribe((response) => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful !!`;
        this.getTodoFromServer(this.username);
        this.loadingProviderService.CloseHttpServiceLoading();
      });
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todo', id]);
  }

  addTodo() {
    console.log(`add todo `);
    this.router.navigate(['todo', -1]);
  }
}
