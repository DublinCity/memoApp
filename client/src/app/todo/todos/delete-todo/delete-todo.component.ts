import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-delete-todo',
  template: `
    <button (click)="deleteTodo()">X</button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    button {
      font-size : 20px;
      align: right;
      border: none;
      color: darkgray;
      background-color: white;
      
    }
  `]
})
export class DeleteTodoComponent implements OnInit {

  @Output() onDeleteTodo = new EventEmitter()
  @Input() index: number
  constructor() { }

  ngOnInit() {
  }
  
  deleteTodo() {
    this.onDeleteTodo.emit(this.index)
    console.log('hi')
  }
}
