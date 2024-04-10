import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPartnerComponent } from './registration-partner.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const partner: Routes = [{ path: '', component: RegistrationPartnerComponent }];


@NgModule({
  declarations: [
   RegistrationPartnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(partner),
  FormsModule,
  ReactiveFormsModule,  
  ]
})
export class RegistrationPartnerModule { }
