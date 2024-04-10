import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPersonalDetailsComponent } from './registration-personal-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const personaldetails:Routes=[{
  path:'' ,component:RegistrationPersonalDetailsComponent
}]

@NgModule({
  declarations: [
    RegistrationPersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(personaldetails),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistrationPersonalDetailsModule { }
