import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFamilyDetailsComponent } from './registration-family-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const family: Routes = [{ path: '', component: RegistrationFamilyDetailsComponent }];

@NgModule({
  declarations: [
    RegistrationFamilyDetailsComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(family),
    FormsModule,
    ReactiveFormsModule,  
  ]
})
export class RegistrationFamilyDetailsModule { }
