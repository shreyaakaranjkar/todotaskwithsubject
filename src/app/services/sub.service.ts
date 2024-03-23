import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor() { }

  todoArr : Array<Itodo> = [
    {
      todoItem : 'Angular',
      todoId : '101'
    }
  ]

  todoSub$ : Subject<Itodo> = new Subject()

  fetchTOdos(){
    return this.todoArr
  }

  addTodo(todo : Itodo){
    this.todoArr.push(todo)
  }

  updatetodo(updatedtodoObj : Itodo){
    for (let i = 0; i < this.todoArr.length; i++) {
      if(this.todoArr[i].todoId === updatedtodoObj.todoId){
        this.todoArr[i] = updatedtodoObj
      }
      
    }
  }

  removeTodo(todo : Itodo){
    let getindex = this.todoArr.findIndex(todo => todo.todoId === todo.todoId)
    this.todoArr.splice(getindex,1)
  }
}
