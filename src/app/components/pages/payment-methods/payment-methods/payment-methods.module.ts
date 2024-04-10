import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from './payment-methods.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const paymentMethod: Routes = [{ path: '', component: PaymentMethodsComponent }];


@NgModule({
  declarations: [
    PaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(paymentMethod),
    ReactiveFormsModule,
  ]
})
export class PaymentMethodsModule { }
