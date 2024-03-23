import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/model/student';
import { Itodo } from 'src/app/model/todo';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {

  constructor(private stdserv : StudentService) { }

  stdArr! : Array<Istudent>

  ngOnInit(): void {
    this.stdArr = this.stdserv.fetchStudentArr()
  }

  gotoEdit(studetobj : Istudent){
    this.stdserv.stdObj$.next(studetobj)
  }
  removeStd(std : Istudent){
    this.stdserv.removeStd(std)
  }
}
