import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
    let items = localStorage.getItem('todos');
    if( items !== null ){
      this.todos = JSON.parse(items);
    }
  }

  addTodo(title: string){
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(event: any){
    let index = this.todos.indexOf(event)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  markAsDone(): void{
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
