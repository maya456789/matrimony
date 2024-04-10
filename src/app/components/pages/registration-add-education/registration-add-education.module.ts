import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationAddEducationComponent } from './registration-add-education.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const astro: Routes = [{ path: '', component: RegistrationAddEducationComponent }];

@NgModule({
  declarations: [
    RegistrationAddEducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(astro),
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class RegistrationAddEducationModule { }
