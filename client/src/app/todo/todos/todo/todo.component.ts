import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../share/todo.model'

@Component({
  selector: 'app-todo',
  template: `
      <input type="checkbox" [checked]= "todo.done"><label>{{todo.text}}</label>
  `,
  styles: [`
    :host {
      color:darkgrey;
      background-color: white;
      padding: 16px; 
      display: inline-block;
    }
    input {
      position: relative;
    }
    input:before {
      content:"";
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: white;
      position:absolute;
      border: 1px solid darkgray;
      top: -6px;
      left: -8px;
    }
    input:checked:after {
      content: "\\2713";
      display: inline-block;
      font-size: 18px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      position:absolute;
      top: -6px;
      left: -8px;
      text-align: center;
      color:white;
      background-color: #039be5;
      border: 1px solid darkgray;
    }
    input:checked + label {
      text-decoration: line-through;
      text-decoration-: 2px solid black; 
    }
    label {
      margin: 7px;
    }
  `]
})
export class TodoComponent implements OnInit {
  
  @Input() todo: Todo

  constructor() { }

  ngOnInit() {
  }

}
