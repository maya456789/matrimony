import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const verify: Routes = [{ path: '', component: VerifyEmailComponent }];
@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(verify),
  ]
})
export class VerifyEmailModule { }
