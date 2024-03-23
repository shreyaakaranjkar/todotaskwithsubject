import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoformComponent } from './components/todoform/todoform.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StdformComponent } from './components/stdform/stdform.component';
import { StdlistComponent } from './components/stdlist/stdlist.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StdformComponent,
    StdlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
