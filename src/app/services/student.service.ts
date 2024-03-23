import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Istudent } from '../model/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private snackbarserv : SnackbarService) { }

  studentArr : Array<Istudent> = [
    {
      stdfname : 'John',
      stdlname : 'Doe',
      email : 'jd@gmail.com',
      contact : '123',
      id : '101'
    }
  ]

  stdObj$ : Subject<any> = new Subject()

  fetchStudentArr(){
    return this.studentArr
  }

  addTodo(stdObj : Istudent){
    this.studentArr.push(stdObj);
    this.snackbarserv.openSnackBar(`Student ${stdObj.stdfname} added successfully!`,'Close')
  }

  updatedStd(std : Istudent){
    for (let i = 0; i < this.studentArr.length; i++) {
      if(this.studentArr[i].id === std.id){
        this.studentArr[i] = std
      }
      
    }
  }

  removeStd(removeStd : Istudent){
    let getindex = this.studentArr.findIndex(std => std.id === removeStd.id);
    this.studentArr.splice(getindex,1);
    this.snackbarserv.openSnackBar(`Student ${removeStd.stdfname} removed successfully!`,'Close')

  }
}
