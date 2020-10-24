import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../service/data/todo-service.service';
import { Todo } from '../list-todos/list-todos.component';
import { LoadingProviderService } from '../service/loading-provider.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  username = sessionStorage.getItem('authenticatUser');

  constructor(
    private todoServiceService: TodoServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingProviderService:LoadingProviderService

  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,this.username, 'Defalut', new Date(), false);
    if(this.id != -1) {
    this.loadingProviderService.ViewHttpServiceLoading();
    this.todoServiceService
      .retrieveTodo(this.username, this.id)
      .subscribe((data) => 
      {
        (this.todo = data)
        this.loadingProviderService.CloseHttpServiceLoading();
      });
    }
  }

  saveTodo() {
    if (this.id === -1) this.addTodo();
    else {
      this.todoServiceService
        .putTodo(this.username, this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }

  addTodo() {
    this.todoServiceService
      .postTodo(this.username, this.todo)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
  }
}
