import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Itodo } from 'src/app/model/todo';
import { SubService } from 'src/app/services/sub.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(private todoserv : SubService, private uid : UuidService) { }
  todoform!:FormGroup;
  isEditMode : boolean = false;
  updatedtodo! : Itodo

  ngOnInit(): void {
    this.createForm()
    this.todoserv.todoSub$
    .subscribe(res => {
      console.log(res);
      this.updatedtodo = res;
      this.isEditMode = true;
      this.todoform.patchValue(res)
    })
  }

  createForm(){
    this.todoform = new FormGroup({
      todoItem : new FormControl(null)
    })
  }

  onSubmitForm(){
    if(this.todoform.valid){
      console.log(this.todoform.value);
      let todoObj = {...this.todoform.value, todoId : this.uid.uuid()}
      this.todoserv.addTodo(todoObj);
      this.todoform.reset()
    }
  }

updateTodo(){
  let updatedobj = {...this.todoform.value, todoId : this.updatedtodo.todoId};
  this.todoserv.updatetodo(updatedobj);
  this.todoform.reset();
  this.isEditMode = false
}
}
