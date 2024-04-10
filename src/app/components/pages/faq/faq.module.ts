import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { RouterModule, Routes } from '@angular/router';

const faq: Routes = [{ path: '', component: FaqComponent }];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(faq),
  ]
})
export class FaqModule { }
