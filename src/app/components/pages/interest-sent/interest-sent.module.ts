import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestSentComponent } from './interest-sent.component';
import { Routes , RouterModule } from '@angular/router';

const interestSent : Routes = [{ path:'', component: InterestSentComponent}]

@NgModule({
  declarations: [
    InterestSentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(interestSent),
  ]
})
export class InterestSentModule { }
