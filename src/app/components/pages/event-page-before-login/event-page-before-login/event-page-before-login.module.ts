import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPageBeforeLoginComponent } from './event-page-before-login.component';
import { Routes , RouterModule } from '@angular/router';

const eventPageBeforeLogin: Routes = [{path: '', component: EventPageBeforeLoginComponent}]



@NgModule({
  declarations: [
    EventPageBeforeLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(eventPageBeforeLogin),
  ]
})
export class EventPageBeforeLoginModule { }
