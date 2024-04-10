import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationThankyouComponent } from './registration-thankyou.component';
import { RouterModule, Routes } from '@angular/router';

const thankyou: Routes = [{ path: '', component: RegistrationThankyouComponent }];

@NgModule({
  declarations: [
  RegistrationThankyouComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(thankyou),
  ]
})
export class RegistrationThankyouModule { }
