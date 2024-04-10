import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestAcceptedComponent } from './interest-accepted.component';
import { Routes , RouterModule } from '@angular/router';

const interestAccepted: Routes = [{path: '', component: InterestAcceptedComponent}]


@NgModule({
  declarations: [
    InterestAcceptedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(interestAccepted),
  ]
})
export class InterestAcceptedModule { }
