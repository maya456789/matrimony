import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationEducationComponent } from './registration-education.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const education: Routes = [{ path: '', component: RegistrationEducationComponent }];

@NgModule({
  declarations: [
    RegistrationEducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(education),
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class RegistrationEducationModule { }
