import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoText:string = '';
  todos: string[] = [];


  ngOnInit(){
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  addTodo(){
    this.todos.push(this.todoText);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
