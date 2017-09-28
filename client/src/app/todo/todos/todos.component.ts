import { Component, OnInit} from '@angular/core';
import { Todo } from '../share/todo.model';
import { DatePipe,NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	
	todos: Todo[]
	today: number = Date.now()
  results: string[]
  constructor(private http: HttpClient) { 
  	this.todos = [
  	{done: false, text: '할 일을 추가해 주세요'},
  	]
  }

  ngOnInit() {
    this.http.get('/api').subscribe(data=>{
      if(data){
          for(let i=0;i<Object.keys(data).length;i++){
            this.todos.push({text:data[i].title,done:false})  
          }
        }
      }
    )
  }

  toggleTodo(todo){
  	todo.done = !todo.done
  }

  addTodo(newText:string){
    const body = {title: newText}
    this.http.post('/api',body).subscribe(data=>{
    })
    this.todos.push({text: newText, done: false})
  	this.today = Date.now()
  }
  deleteTodo(index: number){
  	let title = this.todos[index].text
    this.http.delete('/api/'+title).subscribe(data=>{
    })
    console.log('h?')
    this.todos.splice(index,1)
  }

}
