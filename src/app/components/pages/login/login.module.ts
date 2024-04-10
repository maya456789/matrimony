import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const login: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(login),
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
