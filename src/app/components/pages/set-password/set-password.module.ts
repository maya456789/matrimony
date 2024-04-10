import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetPasswordComponent } from './set-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const setpassword: Routes = [{ path: '', component: SetPasswordComponent }];
@NgModule({
  declarations: [
    SetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(setpassword),
    ReactiveFormsModule,
  ]
})
export class SetPasswordModule { }
