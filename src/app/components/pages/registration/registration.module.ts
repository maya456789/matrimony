import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const registration: Routes = [{ path: '', component: RegistrationComponent }];

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(registration),
    ReactiveFormsModule,
  ]
})
export class RegistrationModule { }
