import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationAddressComponent } from './registration-address.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const address: Routes = [{ path: '', component: RegistrationAddressComponent }];

@NgModule({
  declarations: [
    RegistrationAddressComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(address),
    FormsModule,
    ReactiveFormsModule,  
  ]
})
export class RegistrationAddressModule { }
