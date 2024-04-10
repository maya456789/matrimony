import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationMediatorComponent } from './registration-mediator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const mediator: Routes = [{ path: '', component: RegistrationMediatorComponent }];

@NgModule({
  declarations: [
    RegistrationMediatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mediator),
    FormsModule,
    ReactiveFormsModule,  
  ]
})
export class RegistrationMediatorModule { }
