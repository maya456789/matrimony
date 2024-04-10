import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestReceivedNewComponent } from './interest-received-new.component';
import { Routes , RouterModule } from '@angular/router';

const interestReceived : Routes = [{path: '', component: InterestReceivedNewComponent}]

@NgModule({
  declarations: [
    InterestReceivedNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(interestReceived)
  ]
})
export class InterestReceivedNewModule { }
