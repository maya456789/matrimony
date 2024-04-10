import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNumberComponent } from './verify-number.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const verify: Routes = [{ path: '', component: VerifyNumberComponent }];
@NgModule({
  declarations: [
    VerifyNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(verify),

  ]
})
export class VerifyNumberModule { }
