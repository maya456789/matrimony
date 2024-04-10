import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationOccupationComponent } from './registration-occupation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const occupation: Routes = [{ path: '', component: RegistrationOccupationComponent }];


@NgModule({
  declarations: [
    RegistrationOccupationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(occupation),
  FormsModule,
  ReactiveFormsModule,  
  ]
})
export class RegistrationOccupationModule { }
