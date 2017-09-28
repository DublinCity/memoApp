import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-todo',
  template: `
      <button (click)="addTodo(newText)">+</button>
      <input type="text" placeholder="할 일 추가"  [(ngModel)]="newText" (keyup.enter)="onEnter()">
  `,
  styles: [`
    :host {
      padding: 16px 10px; 
      background-color:white;
    }
    input {
      display: inline-block;
      font-size: 18px;
      border: none;
      width:90%;
    }
    input:focus, button:focus {
      outline: none;
    }
    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      text-align:center;
      border: 1px solid dimgray;
      background-color: #d81b60;
      line-height: 22px;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded = new EventEmitter()
  
  newText:string
  buttonColor: string
   constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  addTodo(newText:string){
    
    if(newText){
    this.onTodoAdded.emit(newText)
    this.newText=''
    }

  }
  onEnter(){
    this.addTodo(this.newText)
  }
}
