import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterNowComponent } from './register-now.component';
import { RouterModule, Routes } from '@angular/router';

const registernow: Routes = [{ path: '', component: RegisterNowComponent }];

@NgModule({
  declarations: [
  RegisterNowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registernow),
  ]
})
export class RegisterNowModule { }
