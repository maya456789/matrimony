import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationUploaddocComponent } from './registration-uploaddoc.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const upload: Routes = [{ path: '', component: RegistrationUploaddocComponent }];


@NgModule({
  declarations: [
   RegistrationUploaddocComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(upload),
  FormsModule,
  ReactiveFormsModule,  
  ]
})

export class RegistrationUploaddocModule { }
