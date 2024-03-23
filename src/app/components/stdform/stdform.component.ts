import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  stdForm! : FormGroup;
  updatedStd ! : Istudent;
  isEditMode : boolean = false

  constructor(private stdserv : StudentService, private uid : UuidService) { }

  ngOnInit(): void {
    this.createForm();

    this.stdserv.stdObj$
    .subscribe(res => {
      console.log(res);
      this.updatedStd = res;
      this.isEditMode = true;
      this.stdForm.patchValue(res)
    })
  }

  createForm(){
    this.stdForm = new FormGroup({
      stdfname : new FormControl(null,[Validators.required]),
      stdlname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required])
    })
  }

  onSubmit(){
    if(this.stdForm.valid){
      // console.log(this.stdForm.value);
      let stdObj = {...this.stdForm.value, id : this.uid.uuid()}
      this.stdserv.addTodo(stdObj);
      this.stdForm.reset()
    }
  }
  stdUpdate(){
    let updatedObj = {...this.stdForm.value, id : this.updatedStd.id};
    this.stdserv.updatedStd(updatedObj);
    this.stdForm.reset();
    this.isEditMode = false
  }
}
