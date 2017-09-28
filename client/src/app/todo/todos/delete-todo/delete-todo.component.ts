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
      margin-right: 8px;
      position:relative;
      top: 13px;
      font-size : 20px;
      align: right;
      border: none;
      color: darkgray;
      background: rgba(0,0,0,0);      
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
