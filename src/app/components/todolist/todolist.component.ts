import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { SubService } from 'src/app/services/sub.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private todoserv : SubService) { }

  todoArr!:Array<Itodo>

  ngOnInit(): void {
    this.todoArr = this.todoserv.fetchTOdos()
  }

  onEdit(todo : Itodo){
    this.todoserv.todoSub$.next(todo)
  }
  onDelete(item : Itodo){
    this.todoserv.removeTodo(item)
  }

}
